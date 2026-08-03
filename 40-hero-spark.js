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

