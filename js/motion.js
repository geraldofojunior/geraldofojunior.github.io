/* motion.js for design option C v5 (made by make_motion_c5_v1.py from c4/motion_c4.js): the live subarray is
   aligned to the page's columns, and one section marker runs down the rail or under the row of links. */
/* Motion on the page. Each part shows a mechanism or answers what the reader did; without this file the page is
   complete. With reduced motion, movement becomes cross-fades and nothing plays on its own. No dependencies. */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;
  var hasIO = 'IntersectionObserver' in window;

  /* ------------------------------------------------------------------------- a DRAM subarray adding bit-serially */
  // Vertical layout: column c holds A[c], B[c], a carry bit and S[c] = A[c] + B[c], one bit per row. Each step
  // activates the rows of one bit position and writes the sum bit and the new carry in every column at once.

  function subarray() {
    var fig = document.getElementById('live');
    if (!fig) return;
    var svg = fig.querySelector('.live-svg');
    var stepEl = fig.querySelector('.live-step');
    var btn = document.querySelector('.live-toggle');
    var hint = fig.querySelector('.live-hint');
    var NS = 'http://www.w3.org/2000/svg';

    var BITS = 4;
    var ROWS = [];
    var i;
    for (i = 0; i < BITS; i++) ROWS.push({ key: 'a' + i, name: 'A', sub: i, group: 0 });
    for (i = 0; i < BITS; i++) ROWS.push({ key: 'b' + i, name: 'B', sub: i, group: 1 });
    ROWS.push({ key: 'c', name: 'Carry', group: 2, result: true });
    for (i = 0; i <= BITS; i++) ROWS.push({ key: 's' + i, name: 'S', sub: i, group: 3, result: true });

    var LABEL = 50, PX = 18, PY = 16, GAP = 9, R = 4.5, PAD = 5, KEYGAP = 32;
    var cols = 0, W = 0, rowEl = {}, cell = {}, colBand = null;
    var X0 = LABEL, hang = false, geom = '';     // X0: where the dots start; hang: labels in the margin column
    var A = [], B = [], S = [], C = [], done = false;

    function el(name, attrs, parent) {
      var e = document.createElementNS(NS, name);
      for (var k in attrs) e.setAttribute(k, attrs[k]);
      if (parent) parent.appendChild(e);
      return e;
    }
    function rowY(r) { return PAD + PY / 2 + r * PY + ROWS[r].group * GAP; }
    function colX(c) { return X0 + c * PX + PX / 2; }

    function build() {
      // the dots fill the text column, which starts where the step text starts; a margin column to its left
      // takes the row labels, right-aligned KEYGAP before the text like the keys of the entries
      var fr = fig.getBoundingClientRect();
      var tl = stepEl.getBoundingClientRect().left - fr.left;
      hang = tl >= 64;
      X0 = hang ? tl : LABEL;
      var probe = document.createElement('div');     // the page's gap between margin and text, in px
      probe.style.cssText = 'position:absolute;visibility:hidden;height:0;width:var(--mgap, 32px)';
      fig.appendChild(probe);
      KEYGAP = probe.getBoundingClientRect().width || 32;
      fig.removeChild(probe);
      var T = fr.width - X0;
      var n = Math.max(8, Math.min(40, Math.round(T / 18)));
      var key = n + ':' + X0.toFixed(1) + ':' + T.toFixed(1) + ':' + KEYGAP;
      if (key === geom) return false;
      geom = key;
      cols = n;
      PX = T / n;
      W = X0 + T;
      var H = rowY(ROWS.length - 1) + PY / 2 + PAD;
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.setAttribute('width', W);
      svg.setAttribute('height', H);
      svg.textContent = '';
      colBand = el('rect', { 'class': 'col-band', x: X0, y: 0, width: PX, height: H, rx: 2 }, svg);
      var bl = el('g', { 'class': 'bitlines' }, svg);
      for (var c = 0; c < cols; c++) el('line', { x1: colX(c), x2: colX(c), y1: PAD, y2: H - PAD }, bl);
      rowEl = {};
      cell = {};
      ROWS.forEach(function (row, r) {
        var y = rowY(r);
        var g = el('g', { 'class': 'row' + (row.result ? ' is-result' : '') }, svg);
        var x1 = hang ? X0 : X0 - 6;     // with labels in the margin, the word lines span the text column exactly
        el('rect', { 'class': 'wl-band', x: x1, y: y - PY / 2 + 1.5, width: W - x1, height: PY - 3, rx: 2 }, g);
        el('line', { 'class': 'wl', x1: x1, x2: W, y1: y, y2: y }, g);
        var t = el('text', hang ? { 'class': 'row-label', x: X0 - KEYGAP, y: y + 4, 'text-anchor': 'end' } : { 'class': 'row-label', x: 0, y: y + 4 }, g);
        t.textContent = row.name;
        if (row.sub !== undefined) el('tspan', { dy: 3, 'font-size': 9 }, t).textContent = row.sub;
        cell[row.key] = [];
        for (var c2 = 0; c2 < cols; c2++) cell[row.key].push(el('circle', { 'class': 'cell', cx: colX(c2), cy: y, r: R }, g));
        rowEl[row.key] = g;
      });
      return true;
    }

    function bit(v, k) { return (v >> k) & 1; }
    function paint(key, c, on) { cell[key][c].classList.toggle('is-one', !!on); }

    function load() {
      A = []; B = []; S = []; C = [];
      for (var c = 0; c < cols; c++) {
        A.push(Math.floor(Math.random() * 16));
        B.push(Math.floor(Math.random() * 16));
        S.push(0);
        C.push(0);
        for (var k = 0; k < BITS; k++) { paint('a' + k, c, bit(A[c], k)); paint('b' + k, c, bit(B[c], k)); }
        for (k = 0; k <= BITS; k++) paint('s' + k, c, 0);
        paint('c', c, 0);
      }
      done = false;
    }

    function activate(keys) {
      for (var k in rowEl) rowEl[k].classList.toggle('is-active', keys.indexOf(k) >= 0);
    }

    function addBit(k) {     // sum bit and new carry of bit position k, in every column at once
      for (var c = 0; c < cols; c++) {
        var a = bit(A[c], k), b = bit(B[c], k), ci = C[c];
        C[c] = (a & b) | (a & ci) | (b & ci);    // the carry is the majority of the three bits
        S[c] |= (a ^ b ^ ci) << k;
        paint('s' + k, c, a ^ b ^ ci);
        paint('c', c, C[c]);
      }
    }

    function carryOut() {
      for (var c = 0; c < cols; c++) {
        S[c] |= C[c] << BITS;
        paint('s' + BITS, c, C[c]);
      }
      done = true;
    }

    function sub(n) { return '<sub>' + n + '</sub>'; }
    var STEPS = [{ t: 1300, text: 'S = A + B in every column', run: function () { load(); activate([]); } }];
    for (var k = 0; k < BITS; k++) (function (k) {
      STEPS.push({ t: 950, text: 'Bit ' + k + ': activate A' + sub(k) + ', B' + sub(k) + ', and the carry',
        run: function () { activate(['a' + k, 'b' + k, 'c']); } });
      STEPS.push({ t: 850, text: 'Bit ' + k + ': write the sum bit S' + sub(k) + ' and the new carry',
        run: function () { activate(['s' + k, 'c']); addBit(k); } });
    })(k);
    STEPS.push({ t: 850, text: 'Bit ' + BITS + ': copy the carry into S' + sub(BITS),
      run: function () { activate(['c', 's' + BITS]); carryOut(); } });
    STEPS.push({ t: 2900, text: function () { return 'Done: all ' + cols + ' columns added, one bit position per step'; },
      run: function () { activate([]); } });

    var idx = 0, timer = 0, playing = !reduce, inView = !hasIO, started = false;
    var once = reduce;     // reduced motion: one cycle per Play, never a loop

    function show(n) {
      var st = STEPS[n];
      st.run();
      stepEl.innerHTML = typeof st.text === 'function' ? st.text() : st.text;
      if (hoverCol >= 0) tipText();
    }
    function running() { return playing && inView && !document.hidden; }
    function tick() {
      timer = 0;
      show(idx);
      var t = STEPS[idx].t;
      idx = (idx + 1) % STEPS.length;
      if (once && idx === 0) { setPlaying(false); return; }
      if (running()) timer = window.setTimeout(tick, t);
    }
    function update() {
      if (running() && !timer) {
        timer = window.setTimeout(tick, started ? 0 : 800);    // a press plays the next step at once
        started = true;
      } else if (!running() && timer) {
        window.clearTimeout(timer);
        timer = 0;
      }
    }

    function finalState() {      // reduced motion: the finished addition, without steps
      load();
      for (var k = 0; k < BITS; k++) addBit(k);
      carryOut();
      activate([]);
      stepEl.textContent = 'S = A + B in every column';
    }

    function reset() {
      window.clearTimeout(timer);
      timer = 0;
      idx = 0;
      if (reduce) { finalState(); setPlaying(false); }
      else { show(0); idx = 1; started = false; update(); }
    }

    function setPlaying(on) {
      playing = on;
      if (btn) {
        btn.textContent = on ? 'Pause' : 'Play';
        btn.setAttribute('data-state', on ? 'playing' : 'paused');
      }
      update();
    }

    // reading one column. A mouse reads by pointing; a finger by touching and sliding along the row (vertical
    // movement still scrolls the page). The label and the column band glide together from column to column. For a
    // mouse the label sits under the drawing, clear of the step text; for a finger it sits above, clear of the hand.
    var tip = window.Fluid.tip();
    var hoverCol = -1, scrub = -1, anchor = null, under = false;
    var band = new window.Fluid.Spring({ response: 0.28, precision: 0.1, onUpdate: function (x) {
      if (colBand) colBand.setAttribute('transform', 'translate(' + x + ' 0)');
    } });

    function tipHtml() {
      var c = hoverCol;
      return '<strong>Column ' + (c + 1) + '</strong>' + A[c] + ' + ' + B[c] + ' = ' + (done ? S[c] : '…');
    }
    function tipText() { if (anchor) tip.show(tipHtml(), anchor, 8, under); }
    function point(e, clamp) {
      under = e.pointerType === 'mouse';
      var r = svg.getBoundingClientRect();
      var scale = r.width / W;
      var c = Math.floor(((e.clientX - r.left) / scale - X0) / PX);
      if (clamp) c = Math.max(0, Math.min(cols - 1, c));
      if (c < 0 || c >= cols) { unpoint(); return; }
      var fresh = hoverCol < 0;
      hoverCol = c;
      if (fresh || reduce) band.jump(c * PX); else band.to(c * PX);
      colBand.classList.add('is-on');
      anchor = { left: r.left + (colX(c) - PX / 2) * scale, right: r.left + (colX(c) + PX / 2) * scale, top: r.top, bottom: r.bottom };
      tipText();
    }
    function unpoint() {
      hoverCol = -1;
      anchor = null;
      if (colBand) colBand.classList.remove('is-on');
      tip.hide();
    }
    svg.addEventListener('pointerdown', function (e) {       // feedback on touch-down, not on release
      if (e.pointerType === 'mouse') return;
      scrub = e.pointerId;
      point(e, true);
    });
    svg.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'mouse') point(e, false);
      else if (e.pointerId === scrub) point(e, true);
    });
    svg.addEventListener('pointerup', function (e) { if (e.pointerId === scrub) scrub = -1; });   // the reading stays
    svg.addEventListener('pointercancel', function (e) { if (e.pointerId === scrub) { scrub = -1; unpoint(); } });
    svg.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') unpoint(); });
    document.addEventListener('pointerdown', function (e) { if (hoverCol >= 0 && !svg.contains(e.target)) unpoint(); });
    window.addEventListener('scroll', unpoint, { passive: true });

    if (hint) {
      hint.textContent = canHover ? 'Point at a column to see its sum.' : 'Touch and slide along the columns to see each sum.';
      hint.hidden = false;
    }

    if (btn) {
      btn.hidden = false;
      btn.addEventListener('click', function () { started = true; setPlaying(!playing); });
      btn.setAttribute('data-state', playing ? 'playing' : 'paused');
      btn.textContent = playing ? 'Pause' : 'Play';
    }

    if (hasIO) {
      new IntersectionObserver(function (es) {
        inView = es[es.length - 1].isIntersecting;
        update();
      }, { threshold: 0.15 }).observe(fig);
    }
    document.addEventListener('visibilitychange', update);

    var resizeTimer = 0;
    window.addEventListener('resize', function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () { if (build()) { unpoint(); reset(); } }, 200);
    });

    build();
    reset();

    // for the page checks: the sums the drawing shows
    fig.liveState = function () { return { cols: cols, A: A.slice(), B: B.slice(), S: S.slice(), done: done, step: idx }; };
  }

  /* ------------------------------------------------------------------------- navigation: which section is in view */

  function navSpy() {
    var nav = document.querySelector('.site-header nav');
    var marker = nav && nav.querySelector('.nav-marker');
    if (!marker) return;
    var links = [].slice.call(nav.querySelectorAll('a[href^="#"]'));
    var secs = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
    var current = null, queued = false;

    // the marker rides two independent springs, position and width, so a fast scroll across several sections
    // redirects it smoothly instead of restarting a slide for every section passed
    // in a column of links (the rail) the marker runs down their left side; in a row it runs under them
    var ul = nav.querySelector('ul');
    function isVertical() { return !!ul && window.getComputedStyle(ul).flexDirection === 'column'; }
    var vert = isVertical();
    var mx = 0, mw = 0;
    function draw() {
      marker.style.transform = vert ? 'translateY(' + mx + 'px) scaleY(' + (mw / 100) + ')'
                                    : 'translateX(' + mx + 'px) scaleX(' + (mw / 100) + ')';
    }
    var sx = new window.Fluid.Spring({ precision: 0.1, onUpdate: function (v) { mx = v; draw(); } });
    var sw = new window.Fluid.Spring({ precision: 0.1, onUpdate: function (v) { mw = v; draw(); } });

    function place(a, slide) {
      var v = isVertical();
      if (v !== vert) { vert = v; slide = false; }      // the layout switched between column and row: no slide
      var cs = window.getComputedStyle(a), x, w;
      if (vert) {                                        // as tall as the text: the link's padding plus 4 px off
        var inset = (parseFloat(cs.paddingTop) || 0) + 4;
        x = a.offsetTop + inset;
        w = a.offsetHeight - 2 * inset;
      } else {
        var pad = parseFloat(cs.paddingLeft) || 0;
        x = a.offsetLeft + pad;
        w = a.offsetWidth - 2 * pad;
      }
      if (slide && !reduce) { sx.to(x); sw.to(w); } else { sx.jump(x); sw.jump(w); }
      // on a phone the nav scrolls sideways: keep the current link in view
      if (nav.scrollWidth > nav.clientWidth) {
        var l = a.offsetLeft, r = l + a.offsetWidth;
        if (l < nav.scrollLeft || r > nav.scrollLeft + nav.clientWidth) {
          nav.scrollTo({ left: Math.max(0, l - 16), behavior: reduce ? 'auto' : 'smooth' });
        }
      }
    }

    var header = document.querySelector('.site-header');
    function pick() {
      queued = false;
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 2);
      var line = window.innerHeight * 0.35, at = -1;
      secs.forEach(function (s, n) { if (s && s.getBoundingClientRect().top <= line) at = n; });
      if (at >= 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) at = secs.length - 1;
      var a = at >= 0 ? links[at] : null;
      if (a === current) return;
      if (current) current.removeAttribute('aria-current');
      if (a) {
        a.setAttribute('aria-current', 'true');
        place(a, !!current);
        marker.classList.add('is-on');
      } else {
        marker.classList.remove('is-on');
      }
      current = a;
    }
    function queue() { if (!queued) { queued = true; window.requestAnimationFrame(pick); } }

    // on a phone the links scroll sideways: the edge with more links beyond it fades out
    function edges() {
      var more = nav.scrollWidth - nav.clientWidth;
      nav.classList.toggle('more-left', more > 1 && nav.scrollLeft > 1);
      nav.classList.toggle('more-right', more > 1 && nav.scrollLeft < more - 1);
    }
    nav.addEventListener('scroll', edges, { passive: true });
    window.addEventListener('resize', edges);
    edges();

    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', function () { if (current) place(current, false); queue(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (current) place(current, false); });
    pick();
  }

  /* ------------------------------------------------------------------------- the hardware figure follows the topics */
  // Pointing at or focusing a topic under the figure marks the part of the hardware that topic is about. Leaving
  // the topics marks memory for AI again, the current focus. Without this script the figure marks memory for AI.

  function systemFigure() {
    var fig = document.getElementById('system');
    if (!fig) return;
    var links = [].slice.call(fig.querySelectorAll('.panel-topics a[data-topic]'));
    var home = fig.getAttribute('data-active') || 'mem';
    var leaveTimer = 0;
    function mark(key) {
      window.clearTimeout(leaveTimer);
      fig.setAttribute('data-active', key);
      links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('data-topic') === key); });
    }
    // between two topics the pointer crosses a gap: wait a moment, so the mark moves instead of flashing home
    function leave() { window.clearTimeout(leaveTimer); leaveTimer = window.setTimeout(function () { mark(home); }, 120); }
    links.forEach(function (a) {
      var key = a.getAttribute('data-topic');
      a.addEventListener('pointerenter', function () { mark(key); });
      a.addEventListener('pointerleave', leave);
      a.addEventListener('focus', function () { mark(key); });
      a.addEventListener('blur', leave);
    });
    mark(home);
  }

  /* ------------------------------------------------------------------------- the name moves into the header */
  // While the large name is on screen the header carries no second copy of it; once the name scrolls under the
  // header, the small name appears there. Without this script the header always shows the name.

  function headerTitle() {
    var header = document.querySelector('.site-header');
    var h1 = document.getElementById('name');
    if (!header || !h1 || !hasIO) return;
    document.documentElement.classList.add('has-title-swap');
    var io = null;
    function watch() {
      if (io) io.disconnect();
      io = new IntersectionObserver(function (es) {
        header.classList.toggle('shows-title', !es[es.length - 1].isIntersecting);
      }, { rootMargin: '-' + header.offsetHeight + 'px 0px 0px 0px' });
      io.observe(h1);
    }
    watch();
    var t = 0;
    window.addEventListener('resize', function () { window.clearTimeout(t); t = window.setTimeout(watch, 200); });
  }

  /* ------------------------------------------------------------------------- recorded talks open in a sheet */
  // The video grows out of its card into a sheet over a dimmed page, and goes back into the same card when it
  // closes. The sheet can be dragged down to dismiss: it follows the pointer 1:1, a flick carries it, and it can
  // be grabbed again while it is still moving. Escape, the close button and the dimmed page also close it.
  // Without <dialog> support, or with a modifier key, a card is a plain link to the video.

  function sheet() {
    if (!document.querySelector('a.video[data-video]') || typeof HTMLDialogElement !== 'function') return;
    var Spring = window.Fluid.Spring;

    var dlg = document.createElement('dialog');
    dlg.className = 'sheet';
    dlg.setAttribute('aria-labelledby', 'sheet-title');
    dlg.innerHTML =
      '<div class="sheet-scrim"></div>' +
      '<div class="sheet-panel">' +
        '<div class="sheet-grabber" aria-hidden="true"></div>' +
        '<div class="sheet-head"><div><h2 class="sheet-title" id="sheet-title"></h2><p class="sheet-where"></p></div>' +
          '<button class="sheet-close" type="button" aria-label="Close video">' +
          '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 2.5l7 7M9.5 2.5l-7 7"/></svg></button></div>' +
        '<div class="sheet-frame"><img class="sheet-poster" alt=""></div>' +
        '<p class="sheet-foot"><a class="sheet-out" href="#">Watch on YouTube</a></p>' +
      '</div>';
    document.body.appendChild(dlg);

    var scrim = dlg.querySelector('.sheet-scrim');
    var panel = dlg.querySelector('.sheet-panel');
    var frame = dlg.querySelector('.sheet-frame');
    var poster = dlg.querySelector('.sheet-poster');
    var titleEl = dlg.querySelector('.sheet-title');
    var whereEl = dlg.querySelector('.sheet-where');
    var outEl = dlg.querySelector('.sheet-out');
    var closeBtn = dlg.querySelector('.sheet-close');

    var card = null, iframe = null, loaded = false;
    var state = 'closed';                  // opening, open, closing, closed
    var s0 = 1, tx0 = 0, ty0 = 0, fade = false, H = window.innerHeight;

    function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

    function draw() {
      var q = s0 < 1 ? clamp01((sc.x - s0) / (1 - s0)) : 1;                   // 0 at the card, 1 at rest
      var dim = Math.min(q, 1 - 0.6 * clamp01(Math.max(ty.x, 0) / H));        // pulling it down lifts the dimming
      panel.style.transform = 'translate3d(' + tx.x.toFixed(2) + 'px,' + ty.x.toFixed(2) + 'px,0) scale(' + sc.x.toFixed(4) + ')';
      panel.style.setProperty('--q', q.toFixed(3));
      panel.style.setProperty('--f', fade ? q.toFixed(3) : '1');
      scrim.style.opacity = dim.toFixed(3);
    }
    function rested() {
      if (tx.moving() || ty.moving() || sc.moving()) return;
      if (state === 'closing') finish();
      else if (state === 'opening') state = 'open';
    }
    var tx = new Spring({ precision: 0.3, onUpdate: draw, onRest: rested });
    var ty = new Spring({ precision: 0.3, onUpdate: draw, onRest: rested });
    var sc = new Spring({ precision: 0.0005, onUpdate: draw, onRest: rested });

    // where the sheet's video frame would have to be to sit exactly on the card's thumbnail
    function geometry() {
      H = window.innerHeight;
      var fw = frame.offsetWidth;
      var c = card.querySelector('.video-frame').getBoundingClientRect();
      fade = !(c.width > 0 && c.bottom > 0 && c.top < H);
      if (!fade) {
        s0 = c.width / fw;
        tx0 = c.left - panel.offsetLeft - s0 * frame.offsetLeft;     // offsets ignore transforms: the rest layout
        ty0 = c.top - panel.offsetTop - s0 * frame.offsetTop;
      } else {                                                       // the card is off screen: sink and fade
        s0 = 0.94;
        tx0 = (1 - s0) * panel.offsetWidth / 2;
        ty0 = 48;
      }
    }

    function toRest(o) {
      state = 'opening';
      if (loaded) poster.classList.add('is-gone');
      if (reduce) { tx.jump(0); ty.jump(0); sc.jump(1); state = 'open'; return; }
      var k = { damping: o.damping, response: o.response };      // x and scale keep their own velocity
      tx.to(0, k); sc.to(1, k);
      ty.to(0, { damping: o.damping, response: o.response, velocity: o.velocity });
    }

    function open(a) {
      card = a;
      var img = a.querySelector('.video-frame img');
      titleEl.textContent = a.querySelector('.video-title').textContent;
      whereEl.textContent = a.querySelector('.video-where').textContent;
      outEl.href = a.href;
      poster.src = img.currentSrc || img.src;
      poster.classList.remove('is-gone');
      loaded = false;
      iframe = document.createElement('iframe');
      iframe.title = 'Talk: ' + titleEl.textContent;
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.addEventListener('load', function () {
        loaded = true;
        if (state === 'opening' || state === 'open') poster.classList.add('is-gone');
      });
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(a.getAttribute('data-video')) + '?autoplay=1&rel=0';
      frame.insertBefore(iframe, poster);

      document.documentElement.classList.add('has-sheet');
      dlg.classList.toggle('is-fading-in', reduce);
      dlg.showModal();
      closeBtn.focus({ preventScroll: true });
      geometry();
      a.classList.add('is-lifted');                // the card's thumbnail is now the sheet's
      tx.jump(tx0); ty.jump(ty0); sc.jump(s0);
      toRest({ damping: 1, response: 0.42 });
      if (reduce) draw();
    }

    function close(velocity) {
      if (state === 'closed') return;
      state = 'closing';
      geometry();
      poster.classList.remove('is-gone');          // it lands as the card's thumbnail
      if (reduce) {
        dlg.classList.remove('is-fading-in');
        dlg.classList.add('is-fading-out');
        window.setTimeout(finish, 200);
        return;
      }
      var o = { damping: 1, response: 0.38 };
      tx.to(tx0, o); sc.to(s0, o);
      ty.to(ty0, { damping: 1, response: 0.38, velocity: velocity });
    }

    function cleanup() {
      tx.stop(); ty.stop(); sc.stop();
      if (iframe) { iframe.remove(); iframe = null; }
      document.documentElement.classList.remove('has-sheet');
      dlg.classList.remove('is-fading-in', 'is-fading-out');
      panel.style.transform = '';
      if (card) {
        card.classList.remove('is-lifted');
        card.focus({ preventScroll: true });
        card = null;
      }
    }
    function finish() {
      if (state === 'closed') return;
      state = 'closed';
      if (dlg.open) dlg.close();
      cleanup();
    }
    dlg.addEventListener('close', function () {   // closed by the browser itself (e.g. a repeated Escape)
      if (state !== 'closed') { state = 'closed'; cleanup(); }
    });
    dlg.addEventListener('cancel', function (e) { e.preventDefault(); close(); });
    closeBtn.addEventListener('click', function () { close(); });
    scrim.addEventListener('click', function () { close(); });

    // drag to dismiss
    var drag = null;
    function speed(hist) {                 // px/s over the last 100 ms of movement
      var last = hist[hist.length - 1], i = 0;
      while (i < hist.length - 2 && last[0] - hist[i][0] > 100) i++;
      var dt = last[0] - hist[i][0];
      return dt > 0 ? (last[1] - hist[i][1]) / dt * 1000 : 0;
    }
    panel.addEventListener('pointerdown', function (e) {
      if (state === 'closed' || (e.pointerType === 'mouse' && e.button !== 0)) return;
      if (e.target.closest('button, a')) return;
      var caught = tx.moving() || ty.moving() || sc.moving();
      if (caught) { tx.stop(); ty.stop(); sc.stop(); }          // a grab holds the sheet where it is
      drag = { id: e.pointerId, x: e.clientX, y: e.clientY, from: ty.x, on: false, caught: caught,
               was: state, hist: [[e.timeStamp, e.clientY]] };
      panel.setPointerCapture(e.pointerId);
      panel.classList.add('is-held');        // the video stops taking the pointer, so the drag never loses it
    });
    panel.addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.on) {
        if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;     // a little slack before it counts as a drag
        if (Math.abs(dx) > Math.abs(dy)) { release(e, true); return; }
        drag.on = true;
        drag.y = e.clientY;                  // track from here, so the sheet does not jump by the slack
        dy = 0;
        panel.classList.add('is-dragging');
      }
      var raw = drag.from + dy, edge = Math.min(0, drag.from);
      ty.jump(raw < edge ? edge + Spring.rubberband(raw - edge, H) : raw);   // upward: resistance, no hard stop
      drag.hist.push([e.timeStamp, e.clientY]);
      if (drag.hist.length > 8) drag.hist.shift();
    });
    function release(e, cancelled) {
      if (!drag || e.pointerId !== drag.id) return;
      var d = drag;
      drag = null;
      panel.classList.remove('is-dragging', 'is-held');
      if (panel.hasPointerCapture(e.pointerId)) panel.releasePointerCapture(e.pointerId);
      if (!d.on) {                           // a tap: let a caught sheet carry on where it was going
        if (d.caught) { if (d.was === 'closing') close(); else toRest({ damping: 1, response: 0.42 }); }
        return;
      }
      var v = cancelled ? 0 : speed(d.hist);
      if (ty.x + Spring.project(v) > Math.max(140, H * 0.22)) close(v);   // judged by where the flick would land
      else toRest({ damping: 0.8, response: 0.3, velocity: v });          // momentum, so a little give
    }
    panel.addEventListener('pointerup', function (e) { release(e, false); });
    panel.addEventListener('pointercancel', function (e) { release(e, true); });

    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a.video[data-video]');
      if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      if (state === 'closed') open(a);
    });

    // for the page checks
    dlg.sheetState = function () { return { state: state, tx: tx.x, ty: ty.x, sc: sc.x, s0: s0, tx0: tx0, ty0: ty0, fade: fade }; };
  }
  subarray();
  systemFigure();
  navSpy();
  headerTitle();
  sheet();
})();
