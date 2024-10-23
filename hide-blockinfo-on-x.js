// ==UserScript==
// @name         Hide blockinfo on X
// @namespace    hide-blockinfo-on-x
// @version      0.1
// @description  Prevent users from seeing posts even if you block them
// @author       smallgeek
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

'use strict';

function hideElements() {

    const confirmXpath = '//div[contains(text(), "このポストを表示してもよろしいですか？")]';
    const confirmElement = document.evaluate(confirmXpath, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (confirmElement) {
        confirmElement.parentElement.removeChild(confirmElement);
    }

    const showButtonXpath = '//button[contains(string(), "ポストを表示")]';
    const showButtonElement = document.evaluate(showButtonXpath, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (showButtonElement) {
        showButtonElement.parentElement.removeChild(showButtonElement);
    }
}

(function() {
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, {childList: true, subtree: true});
})();