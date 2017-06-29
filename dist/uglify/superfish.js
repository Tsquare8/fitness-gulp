"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, s) {
  "use strict";
  var o = function () {
    var o = { bcClass: "sf-breadcrumb", menuClass: "sf-js-enabled", anchorClass: "sf-with-ul", menuArrowClass: "sf-arrows" },
        t = function () {
      var o = /iPhone|iPad|iPod/i.test(navigator.userAgent);return o && e(s).load(function () {
        e("body").children().on("click", e.noop);
      }), o;
    }(),
        n = function () {
      var e = document.documentElement.style;return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent);
    }(),
        i = !!s.PointerEvent,
        r = function r(e, s) {
      var t = o.menuClass;s.cssArrows && (t += " " + o.menuArrowClass), e.toggleClass(t);
    },
        a = function a(s, t) {
      return s.find("li." + t.pathClass).slice(0, t.pathLevels).addClass(t.hoverClass + " " + o.bcClass).filter(function () {
        return e(this).children(t.popUpSelector).hide().show().length;
      }).removeClass(t.pathClass);
    },
        l = function l(e) {
      e.children("a").toggleClass(o.anchorClass);
    },
        h = function h(e) {
      var s = e.css("ms-touch-action"),
          o = e.css("touch-action");o = "pan-y" === (o = o || s) ? "auto" : "pan-y", e.css({ "ms-touch-action": o, "touch-action": o });
    },
        p = function p(s, o) {
      var r = "li:has(" + o.popUpSelector + ")";e.fn.hoverIntent && !o.disableHI ? s.hoverIntent(c, f, r) : s.on("mouseenter.superfish", r, c).on("mouseleave.superfish", r, f);var a = "MSPointerDown.superfish";i && (a = "pointerdown.superfish"), t || (a += " touchend.superfish"), n && (a += " mousedown.superfish"), s.on("focusin.superfish", "li", c).on("focusout.superfish", "li", f).on(a, "a", o, u);
    },
        u = function u(s) {
      var o = e(this),
          t = o.siblings(s.data.popUpSelector);t.length > 0 && t.is(":hidden") && (o.one("click.superfish", !1), "MSPointerDown" === s.type || "pointerdown" === s.type ? o.trigger("focus") : e.proxy(c, o.parent("li"))());
    },
        c = function c() {
      var s = e(this),
          o = m(s);clearTimeout(o.sfTimer), s.siblings().superfish("hide").end().superfish("show");
    },
        f = function f() {
      var s = e(this),
          o = m(s);t ? e.proxy(d, s, o)() : (clearTimeout(o.sfTimer), o.sfTimer = setTimeout(e.proxy(d, s, o), o.delay));
    },
        d = function d(s) {
      s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(v(this)), s.$path.length && e.proxy(c, s.$path)());
    },
        v = function v(e) {
      return e.closest("." + o.menuClass);
    },
        m = function m(e) {
      return v(e).data("sf-options");
    };return { hide: function hide(s) {
        if (this.length) {
          var o = this,
              t = m(o);if (!t) return this;var n = !0 === t.retainPath ? t.$path : "",
              i = o.find("li." + t.hoverClass).add(this).not(n).removeClass(t.hoverClass).children(t.popUpSelector),
              r = t.speedOut;s && (i.show(), r = 0), t.retainPath = !1, t.onBeforeHide.call(i), i.stop(!0, !0).animate(t.animationOut, r, function () {
            var s = e(this);t.onHide.call(s);
          });
        }return this;
      }, show: function show() {
        var e = m(this);if (!e) return this;var s = this.addClass(e.hoverClass).children(e.popUpSelector);return e.onBeforeShow.call(s), s.stop(!0, !0).animate(e.animation, e.speed, function () {
          e.onShow.call(s);
        }), this;
      }, destroy: function destroy() {
        return this.each(function () {
          var s,
              t = e(this),
              n = t.data("sf-options");if (!n) return !1;s = t.find(n.popUpSelector).parent("li"), clearTimeout(n.sfTimer), r(t, n), l(s), h(t), t.off(".superfish").off(".hoverIntent"), s.children(n.popUpSelector).attr("style", function (e, s) {
            return s.replace(/display[^;]+;?/g, "");
          }), n.$path.removeClass(n.hoverClass + " " + o.bcClass).addClass(n.pathClass), t.find("." + n.hoverClass).removeClass(n.hoverClass), n.onDestroy.call(t), t.removeData("sf-options");
        });
      }, init: function init(s) {
        return this.each(function () {
          var t = e(this);if (t.data("sf-options")) return !1;var n = e.extend({}, e.fn.superfish.defaults, s),
              i = t.find(n.popUpSelector).parent("li");n.$path = a(t, n), t.data("sf-options", n), r(t, n), l(i), h(t), p(t, n), i.not("." + o.bcClass).superfish("hide", !0), n.onInit.call(this);
        });
      } };
  }();e.fn.superfish = function (s, t) {
    return o[s] ? o[s].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != (typeof s === "undefined" ? "undefined" : _typeof(s)) && s ? e.error("Method " + s + " does not exist on jQuery.fn.superfish") : o.init.apply(this, arguments);
  }, e.fn.superfish.defaults = { popUpSelector: "ul,.sf-mega", hoverClass: "sfHover", pathClass: "overrideThisToUse", pathLevels: 1, delay: 800, animation: { opacity: "show" }, animationOut: { opacity: "hide" }, speed: "normal", speedOut: "fast", cssArrows: !0, disableHI: !1, onInit: e.noop, onBeforeShow: e.noop, onShow: e.noop, onBeforeHide: e.noop, onHide: e.noop, onIdle: e.noop, onDestroy: e.noop };
}(jQuery, window);