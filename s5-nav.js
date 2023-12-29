// Set up the mobile breakpoint
const secFiveNav = window.matchMedia("(max-width: 991px)");

// Function to handle animations for mobile
function handleSecFiveNav() {
  //
  //
  // ---------- MOBILE BREAKPOINT ----------
  //
  //

  if (secFiveNav.matches) {
    // S4 > Figures Scroll (Mobile)

    let select_f = (selector) => {
      return document.querySelector(selector);
    };

    let next_btn_f = select_f("#s5-next");
    let prev_btn_f = select_f("#s5-prev");
    let clear_f = select_f("#s5clear");

    let s5figureScroll = gsap
      .timeline({ paused: true, defaults: { duration: 0.4, ease: "power1.inOut" } })

      .to(".figure", { xPercent: -100, pointerEvents: "none" }, "<")
      .to("#s5-kerwin", { pointerEvents: "none" }, "<")
      .to("#s5-waffutu", { pointerEvents: "auto" }, "<")
      .to("#s5-darla", { pointerEvents: "none" }, "<")

      .addPause()
      .to(".figure", { xPercent: -200, pointerEvents: "none" }, "<")
      .to("#s5-waffutu", { pointerEvents: "none" }, "<")
      .to("#s5-darla", { pointerEvents: "auto" }, "<")
      .to("#s5-don-bernice", { pointerEvents: "none" }, "<")

      .addPause()
      .to(".figure", { xPercent: -300, pointerEvents: "none" }, "<")
      .to("#s5-darla", { pointerEvents: "none" }, "<")
      .to("#s5-don-bernice", { pointerEvents: "auto" }, "<")
      .to("#s5-uptown-moe", { pointerEvents: "none" }, "<")

      .addPause()
      .to(".figure", { xPercent: -400, pointerEvents: "none" }, "<")
      .to("#s5-don-bernice", { pointerEvents: "none" }, "<")
      .to("#s5-uptown-moe", { pointerEvents: "auto" }, "<")
      .to("#s5-brrrick", { pointerEvents: "none" }, "<")

      .addPause()
      .to(".figure", { xPercent: -500, pointerEvents: "none" }, "<")
      .to("#s5-uptown-moe", { pointerEvents: "none" }, "<")
      .to("#s5-brrrick", { pointerEvents: "auto" }, "<");

    next_btn_f.addEventListener("click", () => s5figureScroll.play());
    prev_btn_f.addEventListener("click", () => s5figureScroll.reverse());
    clear_f.addEventListener("click", () => {
        s5figureScroll.progress(0);
    });

  } else {
  }
}

// Initial call to handle animations based on the viewport width
handleSecFiveNav();

// Listen for viewport width changes
secFiveNav.addListener(handleSecFiveNav);
