"use strict";

!function () {
  "use strict";
  var e = function e() {
    $("#fh5co-primary-menu").superfish({ delay: 0, animation: { opacity: "show" }, speed: "fast", cssArrows: !0, disableHI: !0 });
  },
      a = function a() {
    $(window).stellar();
  },
      n = function n() {
    var e = $("#fh5co-menu-wrap").clone();e.attr({ id: "offcanvas-menu" }), e.find("> ul").attr({ class: "", id: "" }), $("#fh5co-page").prepend(e), $(".js-fh5co-nav-toggle").on("click", function () {
      $("body").hasClass("fh5co-offcanvas") ? $("body").removeClass("fh5co-offcanvas") : $("body").addClass("fh5co-offcanvas");
    }), $("#offcanvas-menu").css("height", $(window).height()), $(window).resize(function () {
      var e = $(window);$("#offcanvas-menu").css("height", e.height()), e.width() > 769 && $("body").hasClass("fh5co-offcanvas") && $("body").removeClass("fh5co-offcanvas");
    });
  },
      s = function s() {
    $(document).click(function (e) {
      var a = $("#offcanvas-menu, .js-fh5co-nav-toggle");a.is(e.target) || 0 !== a.has(e.target).length || $("body").hasClass("fh5co-offcanvas") && $("body").removeClass("fh5co-offcanvas");
    });
  },
      t = function t() {
    var e = 0;$(".animate-box").waypoint(function (a) {
      "down" !== a || $(this.element).hasClass("animated") || (e++, $(this.element).addClass("item-animate"), setTimeout(function () {
        $("body .animate-box.item-animate").each(function (e) {
          var a = $(this);setTimeout(function () {
            a.addClass("fadeInUp animated"), a.removeClass("item-animate");
          }, 200 * e, "easeInOutExpo");
        });
      }, 100));
    }, { offset: "85%" });
  },
      o = function o() {
    $(".schedule-container").css("height", $(".schedule-content.active").outerHeight()), $(window).resize(function () {
      $(".schedule-container").css("height", $(".schedule-content.active").outerHeight());
    }), $(".schedule a").on("click", function (e) {
      e.preventDefault();var a = $(this),
          n = a.data("sched");$(".schedule a").removeClass("active"), a.addClass("active"), $(".schedule-content").removeClass("active"), $('.schedule-content[data-day="' + n + '"]').addClass("active");
    });
  };$(function () {
    e(), a(), n(), s(), t(), o();
  });
}();