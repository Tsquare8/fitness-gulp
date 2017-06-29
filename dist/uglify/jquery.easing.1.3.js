"use strict";

jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function swing(n, e, t, u, a) {
    return jQuery.easing[jQuery.easing.def](n, e, t, u, a);
  }, easeInQuad: function easeInQuad(n, e, t, u, a) {
    return u * (e /= a) * e + t;
  }, easeOutQuad: function easeOutQuad(n, e, t, u, a) {
    return -u * (e /= a) * (e - 2) + t;
  }, easeInOutQuad: function easeInOutQuad(n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t;
  }, easeInCubic: function easeInCubic(n, e, t, u, a) {
    return u * (e /= a) * e * e + t;
  }, easeOutCubic: function easeOutCubic(n, e, t, u, a) {
    return u * ((e = e / a - 1) * e * e + 1) + t;
  }, easeInOutCubic: function easeInOutCubic(n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t;
  }, easeInQuart: function easeInQuart(n, e, t, u, a) {
    return u * (e /= a) * e * e * e + t;
  }, easeOutQuart: function easeOutQuart(n, e, t, u, a) {
    return -u * ((e = e / a - 1) * e * e * e - 1) + t;
  }, easeInOutQuart: function easeInOutQuart(n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t;
  }, easeInQuint: function easeInQuint(n, e, t, u, a) {
    return u * (e /= a) * e * e * e * e + t;
  }, easeOutQuint: function easeOutQuint(n, e, t, u, a) {
    return u * ((e = e / a - 1) * e * e * e * e + 1) + t;
  }, easeInOutQuint: function easeInOutQuint(n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t;
  }, easeInSine: function easeInSine(n, e, t, u, a) {
    return -u * Math.cos(e / a * (Math.PI / 2)) + u + t;
  }, easeOutSine: function easeOutSine(n, e, t, u, a) {
    return u * Math.sin(e / a * (Math.PI / 2)) + t;
  }, easeInOutSine: function easeInOutSine(n, e, t, u, a) {
    return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t;
  }, easeInExpo: function easeInExpo(n, e, t, u, a) {
    return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t;
  }, easeOutExpo: function easeOutExpo(n, e, t, u, a) {
    return e == a ? t + u : u * (1 - Math.pow(2, -10 * e / a)) + t;
  }, easeInOutExpo: function easeInOutExpo(n, e, t, u, a) {
    return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (2 - Math.pow(2, -10 * --e)) + t;
  }, easeInCirc: function easeInCirc(n, e, t, u, a) {
    return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
  }, easeOutCirc: function easeOutCirc(n, e, t, u, a) {
    return u * Math.sqrt(1 - (e = e / a - 1) * e) + t;
  }, easeInOutCirc: function easeInOutCirc(n, e, t, u, a) {
    return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
  }, easeInElastic: function easeInElastic(n, e, t, u, a) {
    var r = 1.70158,
        i = 0,
        s = u;if (0 == e) return t;if (1 == (e /= a)) return t + u;if (i || (i = .3 * a), s < Math.abs(u)) {
      s = u;r = i / 4;
    } else r = i / (2 * Math.PI) * Math.asin(u / s);return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) + t;
  }, easeOutElastic: function easeOutElastic(n, e, t, u, a) {
    var r = 1.70158,
        i = 0,
        s = u;if (0 == e) return t;if (1 == (e /= a)) return t + u;if (i || (i = .3 * a), s < Math.abs(u)) {
      s = u;r = i / 4;
    } else r = i / (2 * Math.PI) * Math.asin(u / s);return s * Math.pow(2, -10 * e) * Math.sin((e * a - r) * (2 * Math.PI) / i) + u + t;
  }, easeInOutElastic: function easeInOutElastic(n, e, t, u, a) {
    var r = 1.70158,
        i = 0,
        s = u;if (0 == e) return t;if (2 == (e /= a / 2)) return t + u;if (i || (i = a * (.3 * 1.5)), s < Math.abs(u)) {
      s = u;r = i / 4;
    } else r = i / (2 * Math.PI) * Math.asin(u / s);return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * -.5 + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * a - r) * (2 * Math.PI) / i) * .5 + u + t;
  }, easeInBack: function easeInBack(n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t;
  }, easeOutBack: function easeOutBack(n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t;
  }, easeInOutBack: function easeInOutBack(n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : u / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t;
  }, easeInBounce: function easeInBounce(n, e, t, u, a) {
    return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t;
  }, easeOutBounce: function easeOutBounce(n, e, t, u, a) {
    return (e /= a) < 1 / 2.75 ? u * (7.5625 * e * e) + t : e < 2 / 2.75 ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t;
  }, easeInOutBounce: function easeInOutBounce(n, e, t, u, a) {
    return e < a / 2 ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t;
  } });