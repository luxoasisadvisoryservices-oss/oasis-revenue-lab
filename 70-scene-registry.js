  /* ---------------- scene registry + single rAF loop ---------------- */
  var scenes = [];
  var vh = window.innerHeight;

  function addScene(el, type, fn) {
    if (el) scenes.push({ el: el, type: type, fn: fn, top: 0, height: 0, p: -1 });
  }
  function measure() {
    vh = window.innerHeight;
    var y = window.scrollY;
    scenes.forEach(function (s) {
      var r = s.el.getBoundingClientRect();
      s.top = r.top + y;
      s.height = r.height;
    });
    measureFeed();
  }
  function progressOf(s, y) {
    if (s.type === "pin") {
      var span = s.height - vh;
      if (span <= 0) return 1;
      return clamp01((y - s.top) / span);
    }
    /* "view" scenes scrub while the element travels 88% -> 34% of viewport height */
    var start = s.top - vh * 0.88;
    var end = s.top - vh * 0.34;
    if (end <= start) return 1;
    return clamp01((y - start) / (end - start));
  }

  var ticking = false;
  function frame() {
    ticking = false;
    var y = window.scrollY;
    var needsFrame = false;
    scenes.forEach(function (s) {
      var p = progressOf(s, y);
      if (p !== s.p) { s.fn(p); s.p = p; }
    });
    if (tgDrive && tgFeed) {
      var cur = tgFeed.scrollTop;
      var d = tgTargetScroll - cur;
      if (Math.abs(d) > 0.6) {
        tgFeed.scrollTop = cur + d * 0.18;
        needsFrame = true;
      }
    }
    if (needsFrame) queue();
  }
  function queue() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }

  function sizeAllCanvases() {
    sizeCanvas(heroCanvas);
    sizeCanvas(whyCanvas);
  }

