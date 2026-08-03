  /* ---------------- telegram scene: messages type in, phone settles ---------------- */
  var tgScene = document.querySelector(".tg-scene");
  var tgPhone = tgScene ? tgScene.querySelector(".phone") : null;
  var tgFeed = tgScene ? tgScene.querySelector(".tg-feed") : null;
  var tgItems = [];
  var tgTargetScroll = 0, tgDrive = false, tgFeedH = 0;

  function initTgItems() {
    if (!tgFeed) return;
    tgItems = Array.prototype.map.call(tgFeed.children, function (el) {
      var isMsg = el.classList.contains("tg-msg");
      return { el: el, isMsg: isMsg, w: isMsg ? 3 : 1, top: 0, h: 0, start: 0, width: 0 };
    });
    var totalW = tgItems.reduce(function (a, it) { return a + it.w; }, 0);
    var cursor = 0.06, usable = 0.90;
    tgItems.forEach(function (it) {
      it.start = cursor;
      it.width = usable * (it.w / totalW);
      cursor += it.width;
    });
  }
  function measureFeed() {
    if (!tgFeed || !tgItems.length) return;
    var feedRect = tgFeed.getBoundingClientRect();
    var st = tgFeed.scrollTop;
    tgFeedH = tgFeed.clientHeight;
    tgItems.forEach(function (it) {
      var r = it.el.getBoundingClientRect();
      it.top = r.top - feedRect.top + st;
      it.h = r.height;
    });
  }
  function tgUpdate(p) {
    if (!tgPhone) return;
    /* phone settles from 8deg tilt to upright while it centres */
    var rt = easeOut(band(p, 0, 0.3));
    tgPhone.style.transform = "rotate(" + (8 * (1 - rt)).toFixed(2) + "deg) translateY(" + (26 * (1 - rt)).toFixed(1) + "px)";
    var target = 0;
    tgItems.forEach(function (it) {
      var local = band(p, it.start, it.width);
      if (it.isMsg) {
        var typing = local > 0 && local < 0.5;
        var shown = local >= 0.5;
        it.el.classList.toggle("is-typing", typing);
        it.el.classList.toggle("is-shown", shown);
        if (typing) target = it.top + 44 - tgFeedH + 16;
        else if (shown) target = it.top + it.h - tgFeedH + 16;
      } else {
        var on = local > 0;
        it.el.classList.toggle("is-shown", on);
        if (on) target = it.top + it.h - tgFeedH + 16;
      }
    });
    tgTargetScroll = Math.max(0, target);
    tgDrive = p > 0.02 && p < 0.985;
    tgScene.classList.toggle("is-live", p > 0 && p < 1);
  }

