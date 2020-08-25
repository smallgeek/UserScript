// ==UserScript==
// @name         GitHub contributions Combo
// @namespace    gh-contributions-combo
// @version      0.1
// @description  Add GitHub contributions combo
// @author       smallgeek
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 草のコンテナを探す
    const calendar = document.getElementsByClassName("js-calendar-graph")[0];

    if (!calendar) {
      return;
    }

    // 当日の1日前から途切れるまでを探す
    const today = new Date(Date.now());
    const rects = Array.from(calendar.getElementsByTagName("rect"));

    let days = 0;

    for (const r of rects.reverse()) {
      const rectDate = new Date(r.getAttribute('data-date'));
      const dataCount = Number.parseInt(r.getAttribute('data-count'));

      if (dataCount === 0 && rectDate !== today) {
          break;
      }

      days++;
    }

    let appendText = "";

    if (days > 1) {
        appendText = ` and continuing for ${days} days`;
    }

    const container = document.getElementsByClassName('js-yearly-contributions')[0].children[0];
    const h2 = container.children[1];
    h2.innerHTML += appendText;
})();