// ==UserScript==
// @name         Remap
// @namespace    http://tampermonkey.net/
// @version      2025-09-01
// @description
// @author       bard
// @match        https://dailyship.org/block/*
// @match        https://hackdash.com/block/*
// @grant        none
// ==/UserScript==

game.keymap={
  ArrowUp:'drop',
  ArrowDown:'down',
  ArrowLeft:'left',
  ArrowRight:'right',
  KeyZ:'reverse',
  KeyX:'rotate',
  KeyC:'hold',
  KeyP:'pause',
};
