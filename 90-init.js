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
