
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
