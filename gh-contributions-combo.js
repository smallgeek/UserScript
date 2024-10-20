// ==UserScript==
// @name         GitHub contributions Combo
// @namespace    gh-contributions-combo
// @version      0.2
// @description  Add GitHub contributions combo
// @author       smallgeek
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

let observer;

const f = () => {
    'use strict';

    // 草のコンテナを探す
    const calendar = document.getElementsByClassName("js-calendar-graph")[0];

    if (!calendar) {
      return;
    }

    // 当日の1日前から途切れるまでを探す
    const today = new Date();
    const rects = Array.from(calendar.getElementsByClassName('ContributionCalendar-day'));

    let days = 0;

    for (const r of rects.reverse()) {
      const rectDate = new Date(r.getAttribute('data-date'));
      const dataCount = Number.parseInt(r.getAttribute('data-level'));

      if (dataCount === 0) {
        if (rectDate.getFullYear() !== today.getFullYear() ||
            rectDate.getMonth() !== today.getMonth() ||
            rectDate.getDay() !== today.getDay()) {
          break;
        }
      } else {
        days++;
      }
    }

    let appendText = "";

    if (days > 1) {
        appendText = ` and continuing for ${days} days`;
    }

    const container = document.getElementsByClassName('js-yearly-contributions')[0].children[0];
    const h2 = container.getElementsByTagName('h2')[0];
    h2.innerHTML += appendText;

    observer.disconnect();
}

(function() {
    observer = new MutationObserver(f);
    observer.observe(document.body, {childList: true, subtree: true});
})();
