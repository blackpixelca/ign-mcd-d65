const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
const main = select(".main");
const sec0 = select(".section.cc-section-0");
const sec1 = select(".section.cc-section-1");
const sec2 = select(".section.cc-section-2");
const sec3 = select(".section.cc-section-3");
const sec4 = select(".section.cc-section-4");
const sec5 = select(".section.cc-section-5");

document.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    event.target.focus();
  }
});

//
//
// ---------- Master > Sections Transitions ----------
//
//
const loadOne = gsap
  .timeline({ defaults: { duration: 0.7, ease: "power3" } })
  //Presets
  .set("#card-kerwin", { xPercent: 250 }, "<")
  .set("#card-darla", { xPercent: 50 }, "<")
  .set("#card-waffutu", { xPercent: 150 }, "<")
  .set("#card-don-bernice", { xPercent: "-50" }, "<")
  .set("#card-uptown-moe", { xPercent: "-150" }, "<")
  .set("#card-brrrick", { xPercent: "-250" }, "<")

  //S1 Load In
  .to(".ribbon__text", { y: "0%", opacity: 1 }, "<+0.2")
  .to(".section-1-nav", { y: "0%", opacity: 1 }, "<")
  .to(
    ".loading-sign__wrap",
    { y: "0%", opacity: 1, rotation: 0, ease: "power2" },
    "<",
  )
  .from(".pointer.cc-s1", { xPercent: -30, opacity: 0, rotation: -30 }, "<");

const secZero = gsap
  .timeline({ defaults: { duration: 0.7, ease: "power3" } })
  //S1 Load Out
  .to(".ribbon__text", { yPercent: 10, opacity: 0 }, 0)
  .to(".section-1-nav", { yPercent: 10, opacity: 0 }, 0)
  .to(".section-ribbon.cc-s1", { right: "auto", left: 0, scaleX: -1 }, 0.2)

  //S0 Load In
  .to(main, { x: "100vw", ease: "power4" }, "<+0.1")
  .fromTo(
    "#card-legend",
    { yPercent: 10, rotate: 0, opacity: 0, scale: 0.8 },
    {
      yPercent: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      zIndex: 5,
    },
    "+=0",
  )
  .from(".legend-glow", { scale: 0 }, "<")
  .from(".flip-card__wrap.cc-legend", { opacity: 0 }, "<")
  .to("#s0-nav", { y: "0%", opacity: "1" }, "<");

const secOne = gsap
  .timeline({ defaults: { duration: 0.7, ease: "power3" } })
  .set(".ribbon__text", { yPercent: 0, opacity: 1 }, 0)
  .set(".section-1-nav", { yPercent: 0, opacity: 1 }, 0)
  .set(".section-ribbon.cc-s1", { right: 0, left: "auto", scaleX: 1 }, 0)
  .to(main, { x: "0vw" }, 0);

const secTwo = gsap
  .timeline({ defaults: { duration: 0.7, ease: "power3" } })
  //S1 Load Out
  .to(".ribbon__text", { yPercent: 10, opacity: 0 }, 0)
  .to(".section-1-nav", { yPercent: 10, opacity: 0 }, "<")
  .to(".loading-sign__wrap", { yPercent: 70, opacity: 0, rotation: -3 }, "<")

  //S2 Load In
  .to(main, { x: "-100vw" }, "<+0.1")
  .from(".card", { rotation: "0deg" }, "<+0.5")
  .to("#card-kerwin", { xPercent: 0 }, "<")
  .to("#card-darla", { xPercent: 0 }, "<")
  .to("#card-waffutu", { xPercent: 0 }, "<")
  .to("#card-don-bernice", { xPercent: 0 }, "<")
  .to("#card-uptown-moe", { xPercent: 0 }, "<")
  .to("#card-brrrick", { xPercent: 0 }, "<")
  .to("#s2-title", { y: "0%", opacity: "1" }, "+=0")
  .to("#s2-nav", { y: "0%", opacity: "1" }, "<")
  .from(".speech.cc-s2", { opacity: 0, duration: 0.5 }, "<")
  .from(".point.cc-s2", { rotate: 30, duration: 0.3 }, "<");

const secThree = gsap
  .timeline({ defaults: { duration: 0.7, ease: "power3" } })
  //S2 Load Out
  .to("#s2-title", { y: "-100%", opacity: "0" }, 0)
  .to("#s2-nav", { y: "100%", opacity: "0" }, "<")
  .to(".speech.cc-s2", { opacity: 0, duration: 0.5 }, "<")
  .to(".point.cc-s2", { rotate: 30, duration: 0.3 }, "<")

  //S3 Load In
  .to(main, { x: "-200vw" }, "<")
  .to(".cards", { opacity: 0 }, "<")
  .to("#video-1 > .video-lb", { scale: 1, rotation: 0 }, "<+0.4")
  .to("#s3-title", { y: "0%", opacity: "1" }, "<+0.3")
  .to("#s3-nav", { y: "0%", opacity: "1" }, "<")
  .from(".speech.cc-s3", { opacity: 0, duration: 0.5 }, "<")
  .to(
    ".point.scroll-control-right.cc-s3",
    { display: "flex", opacity: 1, scale: 1 },
    "<",
  );

const secFour = gsap
  .timeline({ defaults: { duration: 0.7, ease: "power3" } })
  //S3 Load Out
  .to("#s3-title", { y: "-100%", opacity: "0" }, 0)
  .to("#s3-nav", { y: "100%", opacity: "0" }, "<")
  .to(".video-lb", { opacity: 1 }, "<+0.1")
  .set(".figure-card", { pointerEvents: "none" }, 0)

  //S4 Load In
  .to(main, { x: "-300vw" }, "<")
  .to(".figure", { xPercent: 0 }, "<")
  .to("#s4-kerwin", { pointerEvents: "auto" }, "<")
  .from(".table", { yPercent: 100 }, "<+0.1")
  .from(".buddies > .buddy > .figure", { yPercent: 70 }, "<")
  .to("#s4-title", { y: "0%", opacity: "1" }, "<")
  .to("#s4-nav", { y: "0", opacity: "1" }, "<")
  .add(() => {
    if (window.innerWidth > 991) {
      const buddyWithKerwin = document.querySelector("#s4-kerwin");
      if (buddyWithKerwin) {
        buddyWithKerwin.click();
      }
    }
  }, "<+0.25")

  .to(".speech.cc-s4", { opacity: 1, duration: 0.5 }, "<")
  .from(".point.cc-s4", { rotate: 30, duration: 0.3 }, "<")
  .set(".figure", { xPercent: 0 }, "+=0");

  const secFourMB = gsap
  if (window.innerWidth < 991) {
    secFourMB.to("#s4-waffutu", { pointerEvents: "none" }, "<");
  }

  const secFive = gsap
  .timeline({ defaults: { duration: 0.7, ease: "power3" } })
  
  //S4 Load Out
  .to(".figure-card__wrap.cc-s4", { y: "100%" }, 0)
  .to(".figure", { xPercent: 0 }, "<")
  .to(".speech.cc-s4", { opacity: 0, duration: 0.5 }, "<")
  .to(".point.cc-s4", { rotate: 30, duration: 0.3 }, "<")
  .to("#s4-title", { y: "-100%", opacity: "0", display: "none" }, "<")
  .to("#s4-nav", { y: "100%", opacity: "0", display: "none" }, "<")


  //Fake S4 to S5 Transition
  .to(".game-set", { x: "-100vw", opacity: 0, display: "none" }, "<+0.2")
  .to(".section-ribbon.u-bg-red-g.cc-s4", { x: "-100vw" }, "<")
  .to(".section-bkg.cc-s4", { x: "-100vw" }, "<")
  .to(".posters", { x: "0vw", opacity: 1 }, "<")
  .to(".game-popups", { y: "100%", opacity: 0, display: "none" }, "<")

 
  .staggerTo(".figure-img", 0.2, { y: -50, ease: Power2.easeOut }, 0.05, "<")
  .to(".game-set-close", { display: "none", pointerEvents: "none" }, "<")
  .to(".figure-card", { display: "none", pointerEvents: "none" }, "<")
  .staggerTo(".figure-shadow",0.2,{ scale: 0.9, ease: Power2.easeOut },0.05,"<")
  .staggerTo(".figure-img",0.2,{ y: 0, ease: Power2.easeOut, delay: 0.2 },0.05,"<")
  .staggerTo(".figure-shadow",0.2,{ scale: 1, ease: Power2.easeOut, delay: 0.2 },0.05,"<")
  .to(".figure-s4-link", { display: "none", pointerEvents: "none" }, "<")
  .to(".figure-s5-link", { display: "flex", zIndex: 5, pointerEvents: "auto" }, "<")
  .to(".scroll-control.cc-mobile-only.cc-s4-figures",{ opacity: 0, display: "none", pointerEvents: "none" },"<")

  //S5 Load In
  .to(".figure", { xPercent: 0 }, "<")
  .to("#s5-kerwin", { pointerEvents: "auto" }, "<")
  .to("#s5-waffutu", { pointerEvents: "none" }, "<")
  .fromTo("#s5-title",{ y: "-10", opacity: "0", display: "none" },{ y: "0", opacity: "1", display: "block" },"<")
  .fromTo("#s5-nav",{ y: "10", opacity: "0", display: "none" },{ y: "0", opacity: "1", display: "block" },"<")
  .to(".direction-s5__wrap", { opacity: 1, display: "flex" }, "<");

  const secFiveMB = gsap.timeline();

if (window.innerWidth < 991) {
  secFiveMB.add(gsap.to(".scroll-control.cc-mobile-only.cc-s5", 
  { display: "flex", opacity: 1, pointerEvents: "auto" }))
  secFiveMB.to("#s4-waffutu", { pointerEvents: "none" }, "<");

}


const restart = gsap
  .timeline({ defaults: { duration: 1, ease: "power4" } })
  .set(".page-wrap", { backgroundColor: "#0050d9", duration: 0.01 }, 0)
  .to(".page-mask", { clipPath: "circle(0%)", ease: "power1" }, "<+0.02")
  .set(main, { x: "0", duration: 0 }, "+=0.3")
  .to(".page-mask", { clipPath: "circle(100%)", ease: "power1" }, "+=0")
  .to(".ribbon__text", { yPercent: 0, opacity: 1 }, "<+0.1")
  .to(".section-1-nav", { yPercent: 0, opacity: 1 }, "<")
  .to(".loading-sign__wrap", { yPercent: 0, opacity: 1, rotation: 0 }, "<")
  .set(".page-wrap", { backgroundColor: "#FFFFFF", duration: 0.01 }, "+=0");

//
//
// ---------- Master Timeline ----------
//
//
var master = gsap
  .timeline()
  .add(loadOne)
  .addPause()
  .add("to0")
  .add(secZero)
  .addPause()
  .add("to1")
  .add(secOne)
  .addPause()
  .add("to2")
  .add(secTwo)
  .addPause()
  .add("to3")
  .add(secThree)
  .addPause()
  .add("to4")
  .add(secFourMB)
  .add(secFour)
  .addPause()
  .add("to5")
  .add(secFiveMB)
  .add(secFive)
  .addPause()
  .add("restart")
  .add(restart)
  .addPause();

//
//
// ---------- Master Timeline > ID Control ----------
//
//

// ---------- Timeline > Forward ----------
document.getElementById("1to0").onclick = () => master.play("to0");
document.getElementById("1to2").onclick = () => master.play("to2");
document.getElementById("2to3").onclick = () => master.play("to3");
document.getElementById("3to4").onclick = () => master.play("to4");
document.getElementById("4to5").onclick = () => master.play("to5");

// ---------- Timeline > Backward ----------
document.getElementById("0to1").onclick = () => master.reverse("to1");
document.getElementById("2to1").onclick = () => master.reverse("to3");
document.getElementById("3to2").onclick = () => master.reverse("to4");
document.getElementById("4to3").onclick = () => master.reverse("to5");
document.getElementById("5to4").onclick = () => master.reverse("restart");

// ---------- Timeline > Jumps ----------
document.getElementById("0to2").onclick = () => master.play("to2");
document.getElementById("5to1").onclick = () => master.play("restart");