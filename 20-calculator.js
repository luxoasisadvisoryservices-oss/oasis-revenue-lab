
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
