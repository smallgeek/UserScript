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
    const ff = Array.from(document.querySelectorAll('a.r-hkyrab.r-1loqt21.r-1tl8opc.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0.css-4rbku5.css-18t94o4.css-901oao'));
    // リツイート・いいねの数
    const retweets = Array.from(document.querySelectorAll('[data-testid="retweet"]'));
    const likes = Array.from(document.querySelectorAll('[data-testid="like"]'));

    for (const element of ff.concat(retweets).concat(likes)) {
        element.parentElement.removeChild(element);
    }
}

(function() {
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, {childList: true, subtree: true});
})();