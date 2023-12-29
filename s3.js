// Set up the mobile breakpoint
const secThreeNav = window.matchMedia("(max-width: 991px)");

// Function to handle animations for mobile
function handleSecThreeNav() {
  //
  //
  // ---------- MOBILE BREAKPOINT ----------
  //
  //

  if (secThreeNav.matches) {
    //
    //
    // ---------- Master > Sections > S3 > Video Slides ----------
    //
    //

    let s3select = (selector) => {
      return document.querySelector(selector);
    };

    let next_btn = s3select("#s3-next");
    let prev_btn = s3select("#s3-prev");

    let s3tl = gsap
      .timeline({
        paused: true,
        defaults: { duration: 0.7, ease: "back" },
      })

      .to(".video-slide", { xPercent: -100 })
      .to(
        ".point.scroll-control-left.cc-s3",
        { display: "flex", opacity: 1, scale: 1 },
        "<",
      )
      .to(".speech.cc-s3", { display: "none", opacity: 0, scale: 0 }, "<")
      .to("#video-1 > .video-lb", { scale: 0.8, rotation: -5 }, "<")
      .to("#video-2 > .video-lb", { scale: 1, rotation: 0 }, "<")

      .addPause()
      .to(".video-slide", { xPercent: -200 })
      .to("#video-2 > .video-lb", { scale: 0.8, rotation: -5 }, "<")
      .to("#video-3 > .video-lb", { scale: 1, rotation: 0 }, "<")

      .addPause()
      .to(".video-slide", { xPercent: -300 })
      .to("#video-3 > .video-lb", { scale: 0.8, rotation: -5 }, "<")
      .to("#video-4 > .video-lb", { scale: 1, rotation: 0 }, "<")

      .addPause()
      .to(".video-slide", { xPercent: -400 })
      .to("#video-4 > .video-lb", { scale: 0.8, rotation: -5 }, "<")
      .to("#video-5 > .video-lb", { scale: 1, rotation: 0 }, "<")

      .addPause()
      .to(".video-slide", { xPercent: -500 })
      .to(
        ".point.scroll-control-right.cc-s3",
        { display: "none", opacity: 0 },
        "<",
      )
      .to("#video-5 > .video-lb", { scale: 0.8, rotation: -5 }, "<")
      .to("#video-6 > .video-lb", { scale: 1, rotation: 0 }, "<");

    next_btn.addEventListener("click", () => s3tl.play());
    prev_btn.addEventListener("click", () => s3tl.reverse());
  } else {
    //
    //
    // ---------- Master > Sections > S3 > Video Slides ----------
    //
    //

    let s3select = (selector) => {
      return document.querySelector(selector);
    };

    let next_btn = s3select("#s3-next");
    let prev_btn = s3select("#s3-prev");

    let s3tl = gsap
      .timeline({
        paused: true,
        defaults: { duration: 0.7, ease: "back" },
      })

      .to(".video-slide", { xPercent: -100 })
      .to(
        ".point.scroll-control-left.cc-s3",
        { display: "flex", opacity: 1, scale: 1 },
        "<",
      )
      .to(".speech.cc-s3", { display: "none", opacity: 0, scale: 0 }, "<")
      .to("#video-1 > .video-lb", { scale: 0.8, rotation: -5 }, "<")
      .to("#video-2 > .video-lb", { scale: 1.07, rotation: 0 }, "<")

      .addPause()
      .to(".video-slide", { xPercent: -200 })
      .to("#video-2 > .video-lb", { scale: 0.8, rotation: -5 }, "<")
      .to("#video-3 > .video-lb", { scale: 1, rotation: 0 }, "<")

      .addPause()
      .to(".video-slide", { xPercent: -300 })
      .to("#video-3 > .video-lb", { scale: 0.8, rotation: -5 }, "<")
      .to("#video-4 > .video-lb", { scale: 1, rotation: 0 }, "<")

      .addPause()
      .to(".video-slide", { xPercent: -400 })
      .to("#video-4 > .video-lb", { scale: 0.8, rotation: -5 }, "<")
      .to("#video-5 > .video-lb", { scale: 1, rotation: 0 }, "<")

      .addPause()
      .to(".video-slide", { xPercent: -500 })
      .to(
        ".point.scroll-control-right.cc-s3",
        { display: "none", opacity: 0 },
        "<",
      )
      .to("#video-5 > .video-lb", { scale: 0.8, rotation: -5 }, "<")
      .to("#video-6 > .video-lb", { scale: 1.07, rotation: 0 }, "<");

    next_btn.addEventListener("click", () => s3tl.play());
    prev_btn.addEventListener("click", () => s3tl.reverse());
  }
}

// Initial call to handle animations based on the viewport width
handleSecThreeNav();

// Listen for viewport width changes
secThreeNav.addListener(handleSecThreeNav);
