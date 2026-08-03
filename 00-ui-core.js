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
