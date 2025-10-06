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
  ArrowDown:'down',
  ArrowLeft:'left',
  ArrowRight:'right',
  ArrowUp:'drop',
  BracketLeft:'delay_decrement',
  BracketRight:'delay_increment',
  End:'reset',
  Equal:'bpf_increment',
  KeyC:'hold',
  KeyP:'pause',
  KeyX:'rotate',
  KeyZ:'reverse',
  Minus:'bpf_decrement',
  PageDown:'up',
};
