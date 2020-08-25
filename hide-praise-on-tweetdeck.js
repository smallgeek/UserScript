// ==UserScript==
// @name         Hide praise on TweetDeck
// @namespace    hide-praise-on-tweetdeck
// @version      0.1
// @description  Hide praise on TweetDeck
// @author       smallgeek
// @match        https://tweetdeck.twitter.com/*
// @grant        none
// ==/UserScript==

'use strict';

function hideElements() {
    // リツイート・いいねの数
    const retweets = Array.from(document.querySelectorAll('.js-retweet-count.retweet-count'));
    const likes = Array.from(document.querySelectorAll('.js-like-count.like-count'));

    for (const element of retweets.concat(likes)) {
        element.parentElement.removeChild(element);
    }
}

(function() {
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, {childList: true, subtree: true});
})();