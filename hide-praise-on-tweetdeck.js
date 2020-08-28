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
    const replys = Array.from(document.querySelectorAll('.js-reply-action.tweet-action.position-rel'));
    const retweets = Array.from(document.querySelectorAll('.js-retweet-count.retweet-count'));
    const likes = Array.from(document.querySelectorAll('.js-like-count.like-count'));

    const repliers = Array.from(document.querySelectorAll('[data-type="repliers"]'));
    const retweeters = Array.from(document.querySelectorAll('[data-type="retweeters"]'));
    const favoriters = Array.from(document.querySelectorAll('[data-type="favoriters"]'));

    for (const element of replys.concat(retweets).concat(likes).concat(repliers).concat(retweeters).concat(favoriters)) {
        element.parentElement.removeChild(element);
    }
}

(function() {
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, {childList: true, subtree: true});
})();