/* Renders the publication list from assets/data.js as ruled rows (venue | title and authors | links), with a topic
   filter and a first-author switch. No dependencies. */
(function () {
  'use strict';

  var S = window.SITE || {};
  var ME = S.ME || '';
  var TOPICS = S.TOPICS || [];
  var PUBS = (S.PUBLICATIONS || []).filter(function (p) { return !p.hidden; });
  var TOPIC_NAME = {};
  TOPICS.forEach(function (t) { TOPIC_NAME[t.key] = t.name; });
  // a name inside a sentence: lowercase its first word unless it is an acronym (DRAM)
  function lowerName(n) { return /^[A-Z][a-z]/.test(n) ? n.charAt(0).toLowerCase() + n.slice(1) : n; }

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var LINKS = [
    ['paper', 'Paper'], ['arxiv', 'arXiv'], ['doi', 'DOI'], ['code', 'Code'], ['slides', 'Slides'], ['video', 'Talk'],
  ];
  var KIND = { journal: 'Journal', magazine: 'Magazine', poster: 'Poster', overview: 'Overview', preprint: 'Preprint' };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function shortTitle(p) {
    var t = p.title.replace(/^POSTER:\s*/i, '');
    var i = t.indexOf(':');
    return i > 0 ? t.slice(0, i) : t;
  }

  function slug(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  // stable ids: pub-<short title>-<venue>-<year>
  var seen = {};
  PUBS.forEach(function (p) {
    var id = 'pub-' + slug(shortTitle(p)).slice(0, 40) + '-' + slug(p.venue).slice(0, 16) + '-' + p.year;
    while (seen[id]) id += '-b';
    seen[id] = true;
    p.id = id;
  });

  var byId = {};
  PUBS.forEach(function (p) { byId[p.id] = p; });

  var state = { topic: 'all', firstOnly: false };
  var enterTimer = 0;

  function authorsHtml(s) {
    return s.split(/,\s*/).map(function (a) {
      return a.replace(/\*$/, '') === ME ? '<span class="me">' + esc(a) + '</span>' : esc(a);
    }).join(', ');
  }

  function pubHtml(p) {
    var l = p.links || {};
    var main = l.paper || l.doi || l.arxiv;
    var title = main ? '<a href="' + esc(main) + '">' + esc(p.title) + '</a>' : esc(p.title);
    var links = LINKS.filter(function (k) { return l[k[0]]; })
      .map(function (k) { return '<a href="' + esc(l[k[0]]) + '">' + k[1] + '</a>'; }).join('');
    return '<li class="entry pub" id="' + p.id + '" data-topic="' + p.topic + '" tabindex="-1">' +
      '<p class="entry-key"><span class="venue">' + esc(p.venue) + '</span>' +
      (KIND[p.kind] ? '<span class="kind">' + KIND[p.kind] + '</span>' : '') + '</p>' +
      '<div class="entry-main">' +
      '<p class="pub-title">' + title + '</p>' +
      '<p class="pub-authors">' + authorsHtml(p.authors) + '</p>' +
      (p.award ? '<p class="pub-award">' + esc(p.award) + '</p>' : '') +
      (p.note ? '<p class="pub-note">' + esc(p.note) + '</p>' : '') +
      '</div>' +
      '<p class="entry-links">' + links + '</p>' +
      '</li>';
  }

  function visible() {
    return PUBS.filter(function (p) {
      return (state.topic === 'all' || p.topic === state.topic) && (!state.firstOnly || p.first);
    });
  }

  function renderFilter() {
    var box = document.getElementById('topic-filter');
    if (!box) return;
    var pool = PUBS.filter(function (p) { return !state.firstOnly || p.first; });
    var html = '<button type="button" data-topic-filter="all" aria-pressed="' + (state.topic === 'all') + '">' +
      'All topics<span class="n">' + pool.length + '</span></button>';
    TOPICS.forEach(function (t) {
      if (!PUBS.some(function (p) { return p.topic === t.key; })) return;
      var n = pool.filter(function (p) { return p.topic === t.key; }).length;
      html += '<button type="button" data-topic-filter="' + t.key + '" aria-pressed="' + (state.topic === t.key) + '">' +
        esc(t.short || t.name) + '<span class="n">' + n + '</span></button>';
    });
    box.innerHTML = html;
  }

  function renderPubs(animate) {
    renderFilter();
    var cb = document.getElementById('first-only');
    if (cb) cb.checked = state.firstOnly;

    var list = document.getElementById('pub-list');
    var count = document.getElementById('pub-count');
    if (!list) return;
    var shown = visible();

    if (count) {
      var firsts = PUBS.filter(function (p) { return p.first; }).length;
      count.textContent = (state.topic === 'all' && !state.firstOnly)
        ? PUBS.length + ' papers, ' + firsts + ' as first author'
        : shown.length + ' of ' + PUBS.length + ' papers' +
          (state.topic !== 'all' ? ' on ' + lowerName(TOPIC_NAME[state.topic]) : '') +
          (state.firstOnly ? ', first author' : '');
    }

    if (!shown.length) {
      list.innerHTML = '<p class="pub-empty">No first-author papers on this topic. Clear “First-author papers only” to see all of them.</p>';
      return;
    }

    var html = '';
    var ys = [];
    shown.forEach(function (p) { if (ys.indexOf(p.year) < 0) ys.push(p.year); });
    ys.sort(function (a, b) { return b - a; });
    ys.forEach(function (yr) {
      html += '<section class="pub-year" aria-label="' + yr + '"><h3>' + yr + '</h3><ol class="rows">';
      shown.filter(function (p) { return p.year === yr; }).forEach(function (p) { html += pubHtml(p); });
      html += '</ol></section>';
    });
    list.innerHTML = html;

    list.classList.remove('is-entering');
    if (animate) {          // a short cross-fade shows that the list changed
      void list.offsetWidth;
      list.classList.add('is-entering');
      window.clearTimeout(enterTimer);
      enterTimer = window.setTimeout(function () { list.classList.remove('is-entering'); }, 400);
    }
  }

  function goToPub(id) {
    var p = byId[id];
    if (!p) return;
    if (!visible().some(function (q) { return q.id === id; })) {
      state.topic = 'all';
      state.firstOnly = false;
      renderPubs();
    }
    var el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    el.focus({ preventScroll: true });
    el.classList.remove('is-target');
    void el.offsetWidth;
    el.classList.add('is-target');
    if (history.replaceState) history.replaceState(null, '', '#' + id);
  }

  function bindControls() {
    var box = document.getElementById('topic-filter');
    if (box) box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-topic-filter]');
      if (!b) return;
      state.topic = b.getAttribute('data-topic-filter');
      renderPubs(true);
      var again = box.querySelector('[data-topic-filter="' + state.topic + '"]');
      if (again) again.focus();
    });
    var cb = document.getElementById('first-only');
    if (cb) cb.addEventListener('change', function () {
      state.firstOnly = cb.checked;
      renderPubs(true);
    });
  }

  renderPubs();
  bindControls();

  window.SitePubs = { goTo: goToPub };
  if (location.hash.indexOf('#pub-') === 0) goToPub(location.hash.slice(1));
})();
