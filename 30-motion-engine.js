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

