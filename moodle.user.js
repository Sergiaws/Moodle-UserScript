// ==UserScript==
// @name        MoodleScript

// @match       *://educacionadistancia.juntadeandalucia.es/*
// @grant       none
// @version     1.0
// @author Sergiaws

// ==/UserScript==
window.addEventListener("load", function() {
document.getElementById("cookie-info-bar").remove();
});