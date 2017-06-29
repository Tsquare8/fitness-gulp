"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  e.fn.hoverIntent = function (t, n, o) {
    var r = { interval: 100, sensitivity: 7, timeout: 0 };r = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e.extend(r, t) : e.isFunction(n) ? e.extend(r, { over: t, out: n, selector: o }) : e.extend(r, { over: t, out: t, selector: n });var v,
        u,
        i,
        s,
        h = function h(e) {
      v = e.pageX, u = e.pageY;
    },
        a = function a(t, n) {
      if (n.hoverIntent_t = clearTimeout(n.hoverIntent_t), Math.abs(i - v) + Math.abs(s - u) < r.sensitivity) return e(n).off("mousemove.hoverIntent", h), n.hoverIntent_s = 1, r.over.apply(n, [t]);i = v, s = u, n.hoverIntent_t = setTimeout(function () {
        a(t, n);
      }, r.interval);
    },
        I = function I(e, t) {
      return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, r.out.apply(t, [e]);
    },
        c = function c(t) {
      var n = jQuery.extend({}, t),
          o = this;o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)), "mouseenter" == t.type ? (i = n.pageX, s = n.pageY, e(o).on("mousemove.hoverIntent", h), 1 != o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function () {
        a(n, o);
      }, r.interval))) : (e(o).off("mousemove.hoverIntent", h), 1 == o.hoverIntent_s && (o.hoverIntent_t = setTimeout(function () {
        I(n, o);
      }, r.timeout)));
    };return this.on({ "mouseenter.hoverIntent": c, "mouseleave.hoverIntent": c }, r.selector);
  };
}(jQuery);