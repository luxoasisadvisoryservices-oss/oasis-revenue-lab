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

