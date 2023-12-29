//
//
// ---------- Master > Sections > S2 > Mobile Controls ----------
//
//

let s2nav = (selector) => {
  return document.querySelector(selector);
};

let next_btn = s2nav("#s2-next");
let prev_btn = s2nav("#s2-prev");

let s2navtl = gsap
  .timeline({
    paused: true,
    defaults: { duration: 0.7, ease: "back" },
  })

  .to(".card", { xPercent: -100 })

  .addPause()
  .to(".card", { xPercent: -200 })

  .addPause()
  .to(".card", { xPercent: -300 })

  .addPause()
  .to(".card", { xPercent: -400 })

  .addPause()
  .to(".card", { xPercent: -500 });

next_btn.addEventListener("click", () => s2navtl.play());
prev_btn.addEventListener("click", () => s2navtl.reverse());
