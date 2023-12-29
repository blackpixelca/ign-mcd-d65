// Set up the mobile breakpoint
const secFourNav = window.matchMedia("(max-width: 991px)");

// Function to handle animations for mobile
function handleS4Nav() {
  //
  //
  // ---------- MOBILE BREAKPOINT ----------
  //
  //

  if (secFourNav.matches) {
    // S4 > Figures Scroll (Mobile)

    let select_f = (selector) => {
      return document.querySelector(selector);
    };

    let next_btn_f = select_f("#s4-next-f");
    let prev_btn_f = select_f("#s4-prev-f");
    let clear_f = select_f("#s4clear");


    let figureScroll = gsap
      .timeline({ paused: true, defaults: { duration: 0.7, ease: "power1.inOut" } })

      .to(".figure", { xPercent: -100 }, "<")
      .to("#s4-kerwin", { pointerEvents: "none" }, "<")
      .to("#s4-waffutu", { pointerEvents: "auto" }, "<")
      .to("#s4-darla", { pointerEvents: "none" }, "<")

      .addPause()
      .to(".figure", { xPercent: -200 }, "<")
      .to("#s4-waffutu", { pointerEvents: "none" }, "<")
      .to("#s4-darla", { pointerEvents: "auto" }, "<")
      .to("#s4-don-bernice", { pointerEvents: "none" }, "<")

      .addPause()
      .to(".figure", { xPercent: -300 }, "<")
      .to("#s4-darla", { pointerEvents: "none" }, "<")
      .to("#s4-don-bernice", { pointerEvents: "auto" }, "<")
      .to("#s4-uptown-moe", { pointerEvents: "none" }, "<")

      .addPause()
      .to(".figure", { xPercent: -400 }, "<")
      .to("#s4-don-bernice", { pointerEvents: "none" }, "<")
      .to("#s4-uptown-moe", { pointerEvents: "auto" }, "<")
      .to("#s4-brrrick", { pointerEvents: "none" }, "<")

      .addPause()
      .to(".figure", { xPercent: -500 }, "<")
      .to("#s4-uptown-moe", { pointerEvents: "none" }, "<")
      .to("#s4-brrrick", { pointerEvents: "auto" }, "<");

    next_btn_f.addEventListener("click", () => figureScroll.play());
    prev_btn_f.addEventListener("click", () => figureScroll.reverse());
    clear_f.addEventListener("click", () => {
        figureScroll.progress(0);
    });




    // S4 > Game Set Scroll (Mobile)

    let select = (selector) => {
      return document.querySelector(selector);
    };

    let next_btn = select("#s4-next");
    let prev_btn = select("#s4-prev");

    let gameSetScroll = gsap
      .timeline({ defaults: { duration: 0.7, ease: "back" } })
      .to(".game__wrap", { xPercent: 0 })
      .addPause()
      .to(".game__wrap", { xPercent: -100 })
      .addPause()
      .to(".game__wrap", { xPercent: -200 })
      .addPause()
      .to(".game__wrap", { xPercent: -300 })
      .addPause()
      .to(".game__wrap", { xPercent: -400 });

    next_btn.addEventListener("click", () => gameSetScroll.play());
    prev_btn.addEventListener("click", () => gameSetScroll.reverse());

    // ---------- S4 > Open Game Sets (Mobile) ----------
    //
    //
    const buddyIDs = [
      "fig-kerwin",
      "fig-darla",
      "fig-waffutu",
      "fig-don-bernice",
      "fig-uptown-moe",
      "fig-brrrick",
    ];
    const figureIDs = [
      "s4-kerwin",
      "s4-darla",
      "s4-waffutu",
      "s4-don-bernice",
      "s4-uptown-moe",
      "s4-brrrick",
    ];
    const gameSetIDs = [
      "set-kerwin",
      "set-darla",
      "set-waffutu",
      "set-don-bernice",
      "set-uptown-moe",
      "set-brrrick",
    ];

    // Create a variable to store the last triggered timeline
    let lastTriggeredTimeline = null;
    buddyIDs.forEach((buddyID, index) => {
      const buddyElement = document.querySelector(`#${buddyID}`);
      const figureElement = document.querySelector(`#${figureIDs[index]}`);
      const gamesetElement = document.querySelector(`#${gameSetIDs[index]}`);
      figureElement.addEventListener("click", () => {
        // Create your GSAP timeline and play it here
        const gmMaster = gsap.timeline({defaults: { duration: 0.4, ease: "power4" },});
       
        // Add your animations to the timeline
        gmMaster.to(".scroll-control.cc-mobile-only.cc-s4-figures",{ display: "none", pointerEvents: "none" },0);
        gmMaster.to(".scroll-control.cc-mobile-only.cc-s4",{ display: "flex", opacity: 1 },0);
        gmMaster.to("#s4-nav",{ yPercent: 100, opacity: 0, pointerEvents: "none" },0);
        gmMaster.to("#s4-title",{ yPercent: -100, opacity: 0, pointerEvents: "none" },0);
        gmMaster.to(".game-set-close",{ display: "flex", opacity: 1, pointerEvents: "auto", zIndex: 20 },0);
        gmMaster.to(".table", { y: 80 }, 0);
        gmMaster.to(".figure", { y: 80 }, 0);
        gmMaster.to(figureElement,{ pointerEvents: "none", display: "none" },0);
        gmMaster.to(".direction-s4__wrap",{ opacity: 0, pointerEvents: "none", display: "none" },0);
        
        // Play the timeline
        gmMaster.play();
        
        // Bring Pointer Event Back
        const closeReset = gsap.timeline();
        closeReset.to(figureElement, { pointerEvents: "auto" }, 0);
        gameSetScroll.restart(true);
        
        // Reverse the last triggered timeline if it exists
        if (lastTriggeredTimeline) {lastTriggeredTimeline.reverse();
        }
        
        // Create a new timeline and assign it to the lastTriggeredTimeline variable
        lastTriggeredTimeline = gsap.timeline({defaults: { duration: 0.4, ease: "power4" }});
        
        // Add your animations to the timeline, targeting the corresponding target element
        lastTriggeredTimeline.to(gamesetElement, {opacity: 1,display: "flex"});
        lastTriggeredTimeline.to(buddyElement.querySelector(".figure-card__wrap"),{ y: "0%" },0);
        lastTriggeredTimeline.to(buddyElement.querySelector(".figure-card"),{ pointerEvents: "auto" },0);

        // Play the timeline
        lastTriggeredTimeline.play();

        const closeGSs = document.querySelectorAll(".game-set-close");
        closeGSs.forEach((closeGS) => {
          closeGS.addEventListener("click", () => {
            lastTriggeredTimeline.reverse();
            gmMaster.reverse();
            closeReset.play();
          });
        });
      });
    });
  } else {
    // ---------- S4 > Open Game Sets (Desktop) ----------
    //
    //
    const buddyIDs = [
      "fig-kerwin",
      "fig-darla",
      "fig-waffutu",
      "fig-don-bernice",
      "fig-uptown-moe",
      "fig-brrrick",
    ];
    const figureIDs = [
      "s4-kerwin",
      "s4-darla",
      "s4-waffutu",
      "s4-don-bernice",
      "s4-uptown-moe",
      "s4-brrrick",
    ];
    const gameSetIDs = [
      "set-kerwin",
      "set-darla",
      "set-waffutu",
      "set-don-bernice",
      "set-uptown-moe",
      "set-brrrick",
    ];

    // Create a variable to store the last triggered timeline
    let lastTriggeredTimeline = null;
    buddyIDs.forEach((buddyID, index) => {
      const buddyElement = document.querySelector(`#${buddyID}`);
      const figureElement = document.querySelector(`#${figureIDs[index]}`);
      const gamesetElement = document.querySelector(`#${gameSetIDs[index]}`);
      figureElement.addEventListener("click", () => {
        // Reverse the last triggered timeline if it exists
        if (lastTriggeredTimeline) {
          lastTriggeredTimeline.reverse();
        }
        // Create a new timeline and assign it to the lastTriggeredTimeline variable
        lastTriggeredTimeline = gsap.timeline();
        // Add your animations to the timeline, targeting the corresponding target element


        lastTriggeredTimeline.to(gamesetElement, {opacity: 1, y: "0%", display: "flex",});
        
        lastTriggeredTimeline.to(gamesetElement.querySelector("#gm-kerwin-1, #gm-darla-1, #gm-waffutu-1, #gm-don-bernice-1, #gm-uptown-moe-1, #gm-brrrick-1",),
        { scale: 1.1, zIndex: 3, duration: 0.3, ease: "power4" },0);
        
        lastTriggeredTimeline.to(gamesetElement.querySelector("#gm-kerwin-2, #gm-darla-2, #gm-waffutu-2, #gm-don-bernice-2, #gm-uptown-moe-2, #gm-brrrick-2",),
        { xPercent: -50, zIndex: 2, duration: 0.3, ease: "power4" },0);
        
        lastTriggeredTimeline.to(gamesetElement.querySelector("#gm-kerwin-3, #gm-darla-3, #gm-waffutu-3, #gm-don-bernice-3, #gm-uptown-moe-3, #gm-brrrick-3",),
        { xPercent: -100,	scale: 0.8,	zIndex: 1,	duration: 0.3,	ease: "power4",},0);
        
        lastTriggeredTimeline.to(gamesetElement.querySelector("#gm-kerwin-4, #gm-darla-4, #gm-waffutu-4, #gm-don-bernice-4, #gm-uptown-moe-4, #gm-brrrick-4",),
        { xPercent: 50, zIndex: 2, duration: 0.3, ease: "power4" },0);
        
        lastTriggeredTimeline.to(gamesetElement.querySelector("#gm-kerwin-5, #gm-darla-5, #gm-waffutu-5, #gm-don-bernice-5, #gm-uptown-moe-5, #gm-brrrick-5",),
        { xPercent: 100,	scale: 0.8,	zIndex: 1,	duration: 0.3,	ease: "power4",},0);
        
        lastTriggeredTimeline.to(buddyElement.querySelector(".figure-card__wrap"),{ y: "0%", duration: 0.3, ease: "power4" },0);
        
        lastTriggeredTimeline.to(buddyElement.querySelector(".figure-card"),{ pointerEvents: "auto" },0);
        
        lastTriggeredTimeline.to(buddyElement.querySelector(".figure-s4-link"),{ pointerEvents: "none" },0);

        // Play the timeline
        lastTriggeredTimeline.play();
      });
    });
  }
}

// Initial call to handle animations based on the viewport width
handleS4Nav();

// Listen for viewport width changes
secFourNav.addListener(handleS4Nav);