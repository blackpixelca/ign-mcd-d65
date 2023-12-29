//
//
// ---------- Master > Sections > S0 > Cards > Legend ----------
//
//
const flipLegend = gsap.timeline({ paused: true });

// Add animations to the timeline
flipLegend.to("#card-legend > .card-sides", { rotateY: 180 }, 0);
flipLegend.to(
  "#card-legend > .card-sides > .card-side.cc-card-front",
  { opacity: 0 },
  0
);
flipLegend.to(
  "#card-legend > .card-sides > .card-side.cc-card-back",
  { display: "flex" },
  0
);

let LegendFlipped = false;
document
  .querySelector("#flip-legend")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (LegendFlipped) {
      flipLegend.reverse();
    } else {
      flipLegend.play();
    }

    LegendFlipped = !LegendFlipped;
  });
