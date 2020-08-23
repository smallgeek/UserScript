// ==UserScript==
// @name         Hide praise on Twitter
// @namespace    hide-praise-on-twitter
// @version      0.1
// @description  Hide praise on Twitter
// @author       smallgeek
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

'use strict';

function hideElements() {
    // フォロー・フォロワー数
    const ff = Array.from(document.querySelectorAll('.css-1dbjc4n.r-18u37iz.r-1w6e6rj'));
    // リツイート・いいねの数
    const count = Array.from(document.querySelectorAll('.css-1dbjc4n.r-xoduu5.r-1udh08x'));

    for (const element of ff.concat(count)) {
        element.parentElement.removeChild(element);
    }
}

(function() {
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, {childList: true, subtree: true});
})();