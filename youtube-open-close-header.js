// ==UserScript==
// @name         YouTube open close header
// @namespace    youtube-open-close-header
// @version      0.1
// @description  Auto open / close YouTube header
// @author       smallgeek
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

'use strict';

window.onscroll = (event) => {
    const container = document.querySelector('#container');
    if (window.scrollY) {
        container.style.display = 'none';
    } else {
        container.style.display = 'flex';
    }
};