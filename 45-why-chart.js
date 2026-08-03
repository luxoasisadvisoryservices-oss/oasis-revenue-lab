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

