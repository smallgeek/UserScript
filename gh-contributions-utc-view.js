// ==UserScript==
// @name         GitHub contributions UTC view
// @namespace    gh-contributions-utc-view
// @version      0.1
// @description  View GitHub contributions in UTC
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

    // 現在のロケールの日時とUTCの日時を取得
    const now = new Date(Date.now());
    const rects = calendar.getElementsByTagName("rect")

    for (const r of rects) {
      const rectDate = new Date(r.getAttribute('data-date'));

      if ((now.getUTCFullYear() < rectDate.getFullYear()) ||
          (now.getUTCFullYear() === rectDate.getFullYear() && now.getUTCMonth() < rectDate.getMonth()) ||
          (now.getUTCFullYear() === rectDate.getFullYear() && now.getUTCMonth() === rectDate.getMonth() && now.getUTCDay() < rectDate.getDay())) {
        // 親から取り除く
        r.style = "visibility: hidden";
      }
    }
})();