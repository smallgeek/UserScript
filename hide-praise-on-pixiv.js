// ==UserScript==
// @name         Hide praise on pixiv
// @namespace    hide-praise-on-pixiv
// @version      0.1
// @description  Hide praise on pixiv
// @author       smallgeek
// @match        https://www.pixiv.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // いいね、コメント、閲覧数の要素を取得
    const reports = Array.from(document.querySelectorAll('.display-report'));
    const lists = Array.from(document.querySelectorAll('.count-list'));

    for (const element of reports.concat(lists)) {
        element.parentElement.removeChild(element);
    }
})();