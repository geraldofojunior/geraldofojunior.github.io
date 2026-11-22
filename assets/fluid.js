/* Springs, and the floating label the research map and the subarray share. No dependencies.

   A spring is set by its damping ratio (1 = settles without overshoot) and its response (seconds to reach the
   target; not a duration). Retargeting a moving spring keeps its position and velocity, so any motion can be
   redirected or grabbed mid-flight without a jump. All springs step on one requestAnimationFrame loop. */
(function () {
  'use strict';

  var active = [];
  var raf = 0, last = 0;
  var STEP = 1 / 240;            // fixed sub-steps keep stiff springs stable at any frame rate

  function frame(now) {
    var dt = Math.min(0.064, last ? (now - last) / 1000 : 1 / 60);   // a stalled tab does not jump
    last = now;
    var list = active.slice(), settled = [], i, s, j;
    for (i = 0; i < list.length; i++) if (list[i].advance(dt)) settled.push(list[i]);
    for (i = 0; i < settled.length; i++) {
      j = active.indexOf(settled[i]);
      if (j >= 0) active.splice(j, 1);
    }
    for (i = 0; i < list.length; i++) {
      s = list[i];
      if (s.onUpdate) s.onUpdate(s.x);
    }
    for (i = 0; i < settled.length; i++) {
      s = settled[i];
      if (s.resting && s.onRest) s.onRest(s.x);   // still at rest: nothing retargeted it in the meantime
    }
    raf = active.length ? window.requestAnimationFrame(frame) : 0;
    if (!raf) last = 0;
  }

  function Spring(o) {
    o = o || {};
    this.x = o.from || 0;
    this.v = 0;
    this.target = this.x;
    this.precision = o.precision || 0.05;
    this.onUpdate = o.onUpdate;
    this.onRest = o.onRest;
    this.resting = true;
    this.set(o.damping == null ? 1 : o.damping, o.response || 0.4);
  }

  Spring.prototype.set = function (damping, response) {
    var w = 2 * Math.PI / response;
    this.k = w * w;                 // stiffness per unit mass
    this.c = 2 * damping * w;       // damping per unit mass
    return this;
  };

  Spring.prototype.advance = function (dt) {
    var n = Math.ceil(dt / STEP), h = dt / n;
    for (var i = 0; i < n; i++) {
      this.v += (-this.k * (this.x - this.target) - this.c * this.v) * h;
      this.x += this.v * h;
    }
    if (Math.abs(this.x - this.target) < this.precision && Math.abs(this.v) < this.precision * 10) {
      this.x = this.target;
      this.v = 0;
      this.resting = true;
      return true;
    }
    return false;
  };

  // move to a target; o.velocity (units per second) hands a gesture's speed to the spring
  Spring.prototype.to = function (target, o) {
    this.target = target;
    if (o) {
      if (o.velocity != null) this.v = o.velocity;
      if (o.damping != null || o.response != null) this.set(o.damping == null ? 1 : o.damping, o.response || 0.4);
    }
    if (this.resting && this.x === target && !this.v) return this;
    this.resting = false;
    if (active.indexOf(this) < 0) active.push(this);
    if (!raf) raf = window.requestAnimationFrame(frame);
    return this;
  };

  // place without motion (a first appearance, a grab, or reduced motion)
  Spring.prototype.jump = function (x) {
    this.stop();
    this.x = this.target = x;
    if (this.onUpdate) this.onUpdate(x);
    return this;
  };

  // hold still where it is now: the value on screen becomes the value
  Spring.prototype.stop = function () {
    var i = active.indexOf(this);
    if (i >= 0) active.splice(i, 1);
    this.v = 0;
    this.target = this.x;
    this.resting = true;
    return this;
  };

  Spring.prototype.moving = function () { return !this.resting; };

  // where a flick would come to rest (Apple's deceleration projection, px/s in, px out)
  Spring.project = function (velocity, rate) {
    rate = rate || 0.998;
    return (velocity / 1000) * rate / (1 - rate);
  };

  // past a boundary, follow less the further the pointer goes
  Spring.rubberband = function (over, dimension, constant) {
    constant = constant || 0.55;
    return (over * dimension * constant) / (dimension + constant * Math.abs(over));
  };

  /* ------------------------------------------------------------------------- a floating label */
  // It appears where it is needed, then glides from target to target on two independent springs (x and y),
  // so moving along a row of papers or columns reads as one continuous label rather than a series of jumps.

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function tip() {
    var el = document.createElement('div');
    el.className = 'map-tip';
    el.setAttribute('aria-hidden', 'true');
    var body = document.createElement('div');
    body.className = 'map-tip-body';
    el.appendChild(body);
    document.body.appendChild(el);

    var x = 0, y = 0, on = false;
    function place() { el.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)'; }
    var sx = new Spring({ response: 0.28, precision: 0.2, onUpdate: function (v) { x = v; place(); } });
    var sy = new Spring({ response: 0.28, precision: 0.2, onUpdate: function (v) { y = v; place(); } });

    return {
      el: el,
      body: body,
      // anchor: a viewport rectangle (or {left, right, top, bottom}). The label sits above it (below if there is
      // no room), or below it first when preferBelow is set.
      show: function (html, anchor, gap, preferBelow) {
        gap = gap == null ? 10 : gap;
        if (html != null) body.innerHTML = html;
        var w = el.offsetWidth, h = el.offsetHeight;
        var cx = (anchor.left + anchor.right) / 2;
        var tx = Math.max(8, Math.min(window.innerWidth - w - 8, cx - w / 2));
        var above = anchor.top - h - gap, under = anchor.bottom + gap;
        var below = preferBelow ? under + h <= window.innerHeight - 8 : above < 8;
        var ty = below ? under : above;
        if (!on || reduce) {
          sx.jump(tx);
          sy.jump(ty);
          el.classList.toggle('is-below', below);
        } else {
          sx.to(tx);
          sy.to(ty);
        }
        if (!on) { on = true; el.classList.add('is-on'); }
      },
      hide: function () {
        if (!on) return;
        on = false;
        el.classList.remove('is-on');
        sx.stop();
        sy.stop();
      },
      isOn: function () { return on; }
    };
  }

  window.Fluid = { Spring: Spring, tip: tip, reduce: reduce };
})();
