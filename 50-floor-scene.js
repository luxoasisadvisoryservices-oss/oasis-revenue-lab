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

