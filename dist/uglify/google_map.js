"use strict";

function init() {
  for (var e = { zoom: 7, center: new google.maps.LatLng(40.69847032728747, -73.9514422416687), scrollwheel: !1, styles: [{ featureType: "administrative.land_parcel", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "landscape.man_made", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "labels", stylers: [{ visibility: "simplified" }, { lightness: 20 }] }, { featureType: "road.highway", elementType: "geometry", stylers: [{ hue: "#f49935" }] }, { featureType: "road.highway", elementType: "labels", stylers: [{ visibility: "simplified" }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ hue: "#fad959" }] }, { featureType: "road.arterial", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ visibility: "simplified" }] }, { featureType: "road.local", elementType: "labels", stylers: [{ visibility: "simplified" }] }, { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "water", elementType: "all", stylers: [{ hue: "#a1cdfc" }, { saturation: 30 }, { lightness: 49 }] }] }, l = document.getElementById("map"), t = new google.maps.Map(l, e), a = ["Brooklyn"], i = 0; i < a.length; i++) {
    $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address=" + a[i] + "&sensor=false", null, function (e) {
      var l = e.results[0].geometry.location,
          a = new google.maps.LatLng(l.lat, l.lng);new google.maps.Marker({ position: a, map: t, icon: "images/loc.png" });
    });
  }
}var google;google.maps.event.addDomListener(window, "load", init);