/* GENERATED FILE — do not edit directly. Edit the files in partials/ styles/ scripts/ then run: python3 build.py */
/* ============================================================
   OASIS REVENUE LAB — vanilla JS, no dependencies.
   Forms/CTAs have no backend: all contact flows open prefilled
   wa.me or mailto: links (see HTML).
   ============================================================ */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* Scene mode: pinned scroll-scrub choreography. Only on wide viewports with
     motion allowed — everywhere else the page renders its complete static state. */
  var sceneMode = !prefersReducedMotion && window.innerWidth >= 768;

  /* ---------- sticky header border on scroll ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---------- scroll-reveal (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- number count-up on scroll-into-view ---------- */
  function formatNumber(value, format) {
    if (format === "dec2") return value.toFixed(2);
    return Math.round(value).toLocaleString("en-US");
  }
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-countup"));
    var format = el.getAttribute("data-format") || "int";
    if (isNaN(target)) return;
    if (prefersReducedMotion) { el.textContent = formatNumber(target, format); return; }
    var duration = 900;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); /* ease-out cubic */
      el.textContent = formatNumber(target * eased, format);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  /* In scene mode, KPI count-ups inside the pinned dashboard scene are driven
     by scroll scrub (see motion engine below), not by IntersectionObserver. */
  var countEls = Array.prototype.filter.call(
    document.querySelectorAll("[data-countup]"),
    function (el) { return !(sceneMode && el.closest(".dash-scene")); }
  );
  if ("IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          countUp(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    countEls.forEach(function (el) { countObserver.observe(el); });
  } else {
    countEls.forEach(countUp);
  }

  /* ============================================================
     FLOOR PRICE CALCULATOR
     Formulas (mirrors the free Excel tool; estimates only):
       occupied nights / month = 30.4 x occupancy
       net cost per occupied night =
         fixed / occupied nights + cleaning / avg stay + other variable
       break-even nightly rate  = net cost / (1 - fees%)
       hard floor               = break-even / 0.90   (10% safety buffer)
       last-minute floor        = hard floor x 0.85 (never below marginal)
       marginal (variable) rate = (cleaning/stay-night + other var)/(1-fees)
       orphan gap fill          = marginal x 1.10
       weekend floor            = hard floor x 1.15
       low-season base          = hard floor x 1.05
       peak season minimum      = hard floor x 1.50
     ============================================================ */
  var calc = {
    fields: [
      { num: "in-fixed",    range: "in-fixed-range" },
      { num: "in-cleaning", range: "in-cleaning-range" },
      { num: "in-stay",     range: "in-stay-range" },
      { num: "in-fees",     range: "in-fees-range" },
      { num: "in-var",      range: "in-var-range" },
      { num: "in-occ",      range: "in-occ-range" }
    ],
    outputs: {
      breakeven: document.getElementById("out-breakeven"),
      floor: document.getElementById("out-floor"),
      lastmin: document.getElementById("out-lastmin"),
      orphan: document.getElementById("out-orphan"),
      weekend: document.getElementById("out-weekend"),
      lowseason: document.getElementById("out-lowseason"),
      peak: document.getElementById("out-peak")
    },
    current: {},
    animFrames: {},
    bars: {},
    lastResults: null
  };
  /* result bars: each output grows a bar proportional to the highest output (peak) */
  Array.prototype.forEach.call(document.querySelectorAll(".calc-bar i[data-bar]"), function (el) {
    calc.bars[el.getAttribute("data-bar")] = el;
  });
  function paintBar(key, value) {
    var bar = calc.bars[key];
    if (!bar || !calc.lastResults || !calc.lastResults.peak) return;
    var scale = Math.max(0, Math.min(1, value / calc.lastResults.peak));
    bar.style.transform = "scaleX(" + scale.toFixed(4) + ")";
  }

  function readInput(id, fallback) {
    var el = document.getElementById(id);
    var v = parseFloat(el && el.value);
    return isNaN(v) ? fallback : v;
  }

  function computeFloorPrices() {
    var fixed = Math.max(0, readInput("in-fixed", 8000));
    var cleaning = Math.max(0, readInput("in-cleaning", 200));
    var stay = Math.max(1, readInput("in-stay", 3));
    var feesPct = Math.min(80, Math.max(0, readInput("in-fees", 18))) / 100;
    var otherVar = Math.max(0, readInput("in-var", 35));
    var occPct = Math.min(100, Math.max(5, readInput("in-occ", 70))) / 100;

    var occupiedNights = 30.4 * occPct;
    var fixedPerNight = fixed / occupiedNights;
    var cleaningPerNight = cleaning / stay;
    var netCostPerNight = fixedPerNight + cleaningPerNight + otherVar;
    var feeFactor = 1 - feesPct;

    var breakeven = netCostPerNight / feeFactor;
    var hardFloor = breakeven / 0.90;
    var marginal = (cleaningPerNight + otherVar) / feeFactor;
    var lastMinute = Math.max(hardFloor * 0.85, marginal);
    var orphan = marginal * 1.10;
    var weekend = hardFloor * 1.15;
    var lowSeason = hardFloor * 1.05;
    var peak = hardFloor * 1.50;

    return {
      breakeven: breakeven,
      floor: hardFloor,
      lastmin: lastMinute,
      orphan: orphan,
      weekend: weekend,
      lowseason: lowSeason,
      peak: peak
    };
  }

  function animateOutput(key, el, to) {
    var from = calc.current[key] || 0;
    calc.current[key] = to;
    paintBar(key, to); /* bar growth is handled by a CSS transform transition */
    if (prefersReducedMotion) { el.textContent = Math.round(to).toLocaleString("en-US"); return; }
    if (calc.animFrames[key]) cancelAnimationFrame(calc.animFrames[key]);
    var duration = 420;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * eased).toLocaleString("en-US");
      if (p < 1) calc.animFrames[key] = requestAnimationFrame(step);
    }
    calc.animFrames[key] = requestAnimationFrame(step);
  }

  function updateCalculator(animate) {
    if (!calc.outputs.floor) return;
    var r = computeFloorPrices();
    calc.lastResults = r;
    Object.keys(calc.outputs).forEach(function (key) {
      var el = calc.outputs[key];
      if (!el) return;
      if (animate) {
        animateOutput(key, el, r[key]);
      } else {
        calc.current[key] = r[key];
        el.textContent = Math.round(r[key]).toLocaleString("en-US");
        paintBar(key, r[key]);
      }
    });
  }

  function paintRangeFill(range) {
    var min = parseFloat(range.min) || 0;
    var max = parseFloat(range.max) || 100;
    var v = parseFloat(range.value);
    var pct = ((v - min) / (max - min)) * 100;
    range.style.setProperty("--fill", pct + "%");
  }

  calc.fields.forEach(function (f) {
    var num = document.getElementById(f.num);
    var range = document.getElementById(f.range);
    if (!num || !range) return;
    paintRangeFill(range);
    range.addEventListener("input", function () {
      num.value = range.value;
      paintRangeFill(range);
      updateCalculator(true);
    });
    num.addEventListener("input", function () {
      var v = parseFloat(num.value);
      if (!isNaN(v)) {
        range.value = Math.min(parseFloat(range.max), Math.max(parseFloat(range.min), v));
        paintRangeFill(range);
      }
      updateCalculator(true);
    });
  });

  /* initialise output values, then animate count-up when scrolled into view */
  if (calc.outputs.floor) {
    updateCalculator(false);
    var outputsPanel = document.querySelector(".calc-outputs");
    if ("IntersectionObserver" in window && !prefersReducedMotion && outputsPanel) {
      Object.keys(calc.outputs).forEach(function (key) {
        if (calc.outputs[key]) calc.outputs[key].textContent = "0";
        if (calc.bars[key]) calc.bars[key].style.transform = "scaleX(0)";
      });
      var seeded = calc.current;
      calc.current = {};
      var calcObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            /* skip the intro count-up if the user already interacted */
            if (Object.keys(calc.current).length === 0) {
              Object.keys(calc.outputs).forEach(function (key) {
                if (calc.outputs[key]) animateOutput(key, calc.outputs[key], seeded[key]);
              });
            }
            calcObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      calcObserver.observe(outputsPanel);
    }
  }
})();

/* ============================================================
   MOTION ENGINE — Apple-style scroll choreography.
   Single rAF loop, scroll position read once per frame, all
   animation via transform / opacity / clip-path / canvas.
   Scene scrubbing only runs when motion is allowed and the
   viewport is >= 768px; otherwise the page stays fully static
   (canvases are still painted in their final state).
   ============================================================ */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var sceneMode = !reduced && window.innerWidth >= 768 && "requestAnimationFrame" in window;
  var dpr = Math.min(2, window.devicePixelRatio || 1);

  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function easeOut(t) { t = clamp01(t); return 1 - Math.pow(1 - t, 3); }
  function band(p, start, width) { return clamp01((p - start) / width); }

  /* ---------------- hero sparkline (draws left-to-right on load) ---------------- */
  var heroCanvas = document.querySelector(".hero-card-canvas");
  var heroPts = [0.10, 0.22, 0.16, 0.30, 0.24, 0.38, 0.30, 0.46, 0.40, 0.56, 0.48, 0.66, 0.58, 0.76, 0.70, 0.92];
  var heroT = reduced ? 1 : 0;

  function sizeCanvas(canvas) {
    if (!canvas) return false;
    var w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return false;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    var ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return true;
  }

  function drawHeroSpark(t) {
    if (!heroCanvas || !heroCanvas.width) return;
    var ctx = heroCanvas.getContext("2d");
    var w = heroCanvas.width / dpr, h = heroCanvas.height / dpr;
    ctx.clearRect(0, 0, w, h);
    var n = heroPts.length;
    var maxX = t * (n - 1);
    if (maxX <= 0) return;
    var pts = [];
    for (var i = 0; i <= Math.floor(maxX) && i < n; i++) {
      pts.push({ x: (i / (n - 1)) * w, y: h * (0.92 - heroPts[i] * 0.62) });
    }
    var lastIdx = Math.floor(maxX);
    if (lastIdx < n - 1) {
      var f = maxX - lastIdx;
      var v = heroPts[lastIdx] + (heroPts[lastIdx + 1] - heroPts[lastIdx]) * f;
      pts.push({ x: (maxX / (n - 1)) * w, y: h * (0.92 - v * 0.62) });
    }
    var head = pts[pts.length - 1];
    /* area fill */
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (var j = 1; j < pts.length; j++) ctx.lineTo(pts[j].x, pts[j].y);
    ctx.lineTo(head.x, h);
    ctx.lineTo(pts[0].x, h);
    ctx.closePath();
    var grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, "rgba(52, 211, 153, 0.20)");
    grad.addColorStop(1, "rgba(52, 211, 153, 0)");
    ctx.fillStyle = grad;
    ctx.fill();
    /* line */
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (var k = 1; k < pts.length; k++) ctx.lineTo(pts[k].x, pts[k].y);
    ctx.strokeStyle = "rgba(52, 211, 153, 0.85)";
    ctx.lineWidth = 1.6;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();
    /* head glow while drawing */
    if (t < 1) {
      ctx.beginPath();
      ctx.arc(head.x, head.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(52, 211, 153, 0.95)";
      ctx.fill();
    }
  }

  function heroIntro() {
    if (!sizeCanvas(heroCanvas)) return;
    if (reduced) { drawHeroSpark(1); return; }
    var duration = 1150, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      heroT = easeOut(p);
      drawHeroSpark(heroT);
      if (p < 1) requestAnimationFrame(step);
    }
    setTimeout(function () { requestAnimationFrame(step); }, 420);
  }

  /* ---------------- why-this-exists comparison chart ---------------- */
  var whyWrap = document.querySelector("[data-why-chart]");
  var whyCanvas = document.getElementById("why-canvas");
  var whyChip = document.getElementById("why-chip");
  var chartLabels = {};
  Array.prototype.forEach.call(document.querySelectorAll("[data-chart-label]"), function (el) {
    chartLabels[el.getAttribute("data-chart-label")] = el;
  });

  var NIGHTS = 30;
  var staticLine = [], managedLine = [];
  (function buildChartData() {
    for (var i = 0; i < NIGHTS; i++) {
      staticLine.push(0.36 + 0.012 * Math.sin(i * 1.7));
      var m = 0.40 + 0.02 * Math.sin(i * 2.3);
      var dow = i % 7;
      if (dow === 4 || dow === 5) m += 0.15;                       /* weekend lift */
      if (i >= 15 && i <= 20) m += 0.30 * Math.sin(Math.PI * (i - 15) / 5); /* Eid spike */
      managedLine.push(m);
    }
  })();
  (function setChipText() {
    if (!whyChip) return;
    var sa = 0, ma = 0;
    for (var i = 0; i < NIGHTS; i++) { sa += staticLine[i]; ma += managedLine[i]; }
    whyChip.textContent = "RevPAR +" + Math.round((ma / sa - 1) * 100) + "% · illustrative";
  })();

  function drawWhyChart(t) {
    if (!whyCanvas || !whyCanvas.width) return;
    var ctx = whyCanvas.getContext("2d");
    var w = whyCanvas.width / dpr, h = whyCanvas.height / dpr;
    var padL = 6, padR = 6, padT = 16, padB = 22;
    var plotW = w - padL - padR, plotH = h - padT - padB;
    var maxV = 0.82;
    ctx.clearRect(0, 0, w, h);
    /* grid */
    ctx.strokeStyle = "rgba(11, 18, 32, 0.07)";
    ctx.lineWidth = 1;
    for (var g = 0; g <= 4; g++) {
      var gy = padT + (plotH * g) / 4;
      ctx.beginPath();
      ctx.moveTo(padL, gy);
      ctx.lineTo(w - padR, gy);
      ctx.stroke();
    }
    function xAt(i) { return padL + (i / (NIGHTS - 1)) * plotW; }
    function yAt(v) { return padT + (1 - v / maxV) * plotH; }
    function drawSeries(data, t, color, dashed) {
      var maxX = t * (NIGHTS - 1);
      if (maxX <= 0) return null;
      ctx.beginPath();
      ctx.moveTo(xAt(0), yAt(data[0]));
      var lastIdx = Math.floor(maxX);
      for (var i = 1; i <= lastIdx && i < NIGHTS; i++) ctx.lineTo(xAt(i), yAt(data[i]));
      var hx = xAt(Math.min(maxX, NIGHTS - 1));
      var hy = yAt(data[Math.min(lastIdx, NIGHTS - 1)]);
      if (lastIdx < NIGHTS - 1) {
        var f = maxX - lastIdx;
        var v = data[lastIdx] + (data[lastIdx + 1] - data[lastIdx]) * f;
        hy = yAt(v);
        ctx.lineTo(hx, hy);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.setLineDash(dashed ? [6, 5] : []);
      ctx.stroke();
      ctx.setLineDash([]);
      return { x: hx, y: hy };
    }
    /* night ticks (weekly) */
    ctx.fillStyle = "rgba(11, 18, 32, 0.4)";
    ctx.font = "10px 'IBM Plex Mono', monospace";
    for (var wk = 0; wk < NIGHTS; wk += 7) {
      ctx.fillText("N" + (wk + 1), xAt(wk) - (wk === 0 ? 0 : 8), h - 6);
    }
    drawSeries(staticLine, t, "#9AA6B9", true);
    var head = drawSeries(managedLine, t, "#0B8F63", false);
    if (head && t < 1) {
      ctx.beginPath();
      ctx.arc(head.x, head.y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#0B8F63";
      ctx.fill();
    }
  }

  function whyUpdate(p) {
    /* linear: the line draws in lockstep with the scroll, Pudding-style */
    var t = clamp01(p);
    drawWhyChart(t);
    if (chartLabels.wkd) chartLabels.wkd.classList.toggle("is-on", t > 0.22);
    if (chartLabels.eid) chartLabels.eid.classList.toggle("is-on", t > 0.62);
    if (whyChip) whyChip.classList.toggle("is-on", t > 0.97);
  }

  /* ---------------- floor-protection micro-scene ---------------- */
  var floorScene = document.querySelector("[data-floor-scene]");
  var fs = null;
  function initFloorScene() {
    if (!floorScene) return;
    var shield = floorScene.querySelector(".fs-shield");
    var check = floorScene.querySelector(".fs-check");
    var price = floorScene.querySelector(".fs-price");
    var impact = floorScene.querySelector(".fs-impact");
    if (!shield || !price) return;
    fs = {
      shield: shield, check: check, price: price, impact: impact,
      shieldLen: shield.getTotalLength(),
      checkLen: check ? check.getTotalLength() : 0,
      priceLen: price.getTotalLength()
    };
    [ [shield, fs.shieldLen], [check, fs.checkLen], [price, fs.priceLen] ].forEach(function (pair) {
      if (!pair[0]) return;
      pair[0].style.strokeDasharray = pair[1];
      pair[0].style.strokeDashoffset = pair[1];
    });
  }
  function floorUpdate(p) {
    if (!fs) return;
    fs.shield.style.strokeDashoffset = (fs.shieldLen * (1 - easeOut(band(p, 0, 0.42)))).toFixed(1);
    if (fs.check) fs.check.style.strokeDashoffset = (fs.checkLen * (1 - easeOut(band(p, 0.34, 0.24)))).toFixed(1);
    var priceT = band(p, 0.22, 0.68); /* linear draw in lockstep with scroll */
    fs.price.style.strokeDashoffset = (fs.priceLen * (1 - priceT)).toFixed(1);
    if (fs.impact) fs.impact.classList.toggle("is-on", priceT > 0.58);
  }

  /* ---------------- dash scene: the morning brief assembles itself ---------------- */
  var dashScene = document.querySelector(".dash-scene");
  var btClock = document.getElementById("bt-clock");
  var btFill = document.getElementById("bt-fill");
  var btCaptions = Array.prototype.slice.call(document.querySelectorAll(".bt-caption"));
  var gaugeFill = document.getElementById("mpi-gauge-fill");
  var GAUGE_C = 125.66;         /* 2 * PI * r20 */
  var GAUGE_FRAC = 0.66;        /* MPI 1.32 on a 0–2.0 dial */
  var dashKpis = Array.prototype.map.call(document.querySelectorAll(".dash-scene [data-scene-kpi]"), function (el) {
    var span = el.querySelector("[data-countup]");
    return {
      el: el,
      span: span,
      target: span ? parseFloat(span.getAttribute("data-countup")) : 0,
      format: span ? (span.getAttribute("data-format") || "int") : "int",
      last: null
    };
  });
  var dashUnits = Array.prototype.slice.call(document.querySelectorAll("[data-scene-unit]"));
  var lastClock = null, lastCaption = -1;

  function dashUpdate(p) {
    /* clock ticks 05:45 -> 09:45 over the first 82% of the scene */
    var tp = clamp01(p / 0.82);
    var mins = 345 + Math.round(240 * tp);
    var hh = Math.floor(mins / 60), mm = mins % 60;
    var clock = (hh < 10 ? "0" : "") + hh + ":" + (mm < 10 ? "0" : "") + mm;
    if (btClock && clock !== lastClock) { btClock.textContent = clock; lastClock = clock; }
    if (btFill) btFill.style.transform = "scaleX(" + tp.toFixed(4) + ")";
    /* stage captions: waiting captions rise from below, finished ones exit upward */
    var ci = p >= 0.84 ? 4 : Math.min(3, Math.floor(tp * 4));
    if (ci !== lastCaption) {
      btCaptions.forEach(function (c, i) {
        c.classList.toggle("is-active", i === ci);
        c.classList.toggle("is-done", i < ci);
      });
      lastCaption = ci;
    }
    /* KPI tiles populate one by one */
    dashKpis.forEach(function (k, i) {
      var local = band(p, 0.14 + i * 0.15, 0.12);
      k.el.classList.toggle("is-on", local > 0);
      if (k.span) {
        var val = k.target * easeOut(local);
        var txt = k.format === "dec2" ? val.toFixed(2) : Math.round(val).toLocaleString("en-US");
        if (txt !== k.last) { k.span.textContent = txt; k.last = txt; }
      }
      if (i === 2 && gaugeFill) {
        gaugeFill.style.strokeDashoffset = (GAUGE_C * (1 - GAUGE_FRAC * easeOut(local))).toFixed(2);
      }
    });
    /* unit reports land last — the finished brief */
    dashUnits.forEach(function (u, i) {
      u.classList.toggle("is-on", p >= 0.84 + i * 0.07);
    });
    var dashUnitsWrap = dashUnits.length ? dashUnits[0].parentElement : null;
    if (dashUnitsWrap) dashUnitsWrap.classList.toggle("is-filled", p >= 0.84);
    if (dashScene) {
      dashScene.classList.toggle("is-live", p > 0 && p < 1);
      dashScene.classList.toggle("is-done", p >= 0.84);
    }
  }

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

  /* ---------------- boot ---------------- */
  if (!sceneMode) {
    /* Final states only: paint canvases fully drawn; CSS already shows everything. */
    var paintStatic = function () {
      sizeAllCanvases();
      drawHeroSpark(1);
      drawWhyChart(1);
    };
    paintStatic();
    window.addEventListener("resize", function () { paintStatic(); });
    window.addEventListener("load", paintStatic);
    return;
  }

  document.documentElement.classList.add("js-scenes");
  initFloorScene();
  initTgItems();
  sizeAllCanvases();
  addScene(dashScene, "pin", dashUpdate);
  addScene(tgScene, "pin", tgUpdate);
  addScene(whyWrap, "view", whyUpdate);
  addScene(floorScene, "view", floorUpdate);
  measure();
  frame();
  heroIntro();

  window.addEventListener("scroll", queue, { passive: true });

  var resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      sizeAllCanvases();
      drawHeroSpark(heroT);
      measure();
      scenes.forEach(function (s) { s.p = -1; });
      queue();
    }, 150);
  });
  /* re-measure after webfonts/layout settle */
  window.addEventListener("load", function () {
    sizeAllCanvases();
    drawHeroSpark(heroT);
    measure();
    scenes.forEach(function (s) { s.p = -1; });
    queue();
  });
  setTimeout(function () { measure(); scenes.forEach(function (s) { s.p = -1; }); queue(); }, 900);
})();
