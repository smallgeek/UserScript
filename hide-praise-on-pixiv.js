// ==UserScript==
// @name         Hide praise on pixiv
// @namespace    hide-praise-on-pixiv
// @version      0.1
// @description  Hide praise on pixiv
// @author       smallgeek
// @match        https://www.pixiv.net/*
// @grant        none
// ==/UserScript==

'use strict';

function hideElements() {
     // いいね、コメント、閲覧数の要素を取得
    const reports = Array.from(document.querySelectorAll('.display-report'));
    const lists = Array.from(document.querySelectorAll('.count-list'));
    const artworks = Array.from(document.querySelectorAll('.sc-1qvk3ka-0.dHOEJf'));

    // フォロワー数の要素を取得
    const follow = Array.from(document.querySelectorAll('.sc-1dlbdn6-10.dOlYed'));

    for (const element of reports.concat(lists).concat(artworks).concat(follow)) {
        element.parentElement.removeChild(element);
    }
}

(function() {
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, {childList: true, subtree: true});
})();