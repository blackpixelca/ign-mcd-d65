// Pop Ups

const triggerIDs = [
  "gm-kerwin-1",
  "gm-kerwin-2",
  "gm-kerwin-3",
  "gm-kerwin-4",
  "gm-kerwin-5",
  "gm-darla-1",
  "gm-darla-2",
  "gm-darla-3",
  "gm-darla-4",
  "gm-darla-5",
  "gm-waffutu-1",
  "gm-waffutu-2",
  "gm-waffutu-3",
  "gm-waffutu-4",
  "gm-waffutu-5",
  "gm-don-bernice-1",
  "gm-don-bernice-2",
  "gm-don-bernice-3",
  "gm-don-bernice-4",
  "gm-don-bernice-5",
  "gm-uptown-moe-1",
  "gm-uptown-moe-2",
  "gm-uptown-moe-3",
  "gm-uptown-moe-4",
  "gm-uptown-moe-5",
  "gm-brrrick-1",
  "gm-brrrick-2",
  "gm-brrrick-3",
  "gm-brrrick-4",
  "gm-brrrick-5",
];
const targetIDs = [
  "pu-kerwin-1",
  "pu-kerwin-2",
  "pu-kerwin-3",
  "pu-kerwin-4",
  "pu-kerwin-5",
  "pu-darla-1",
  "pu-darla-2",
  "pu-darla-3",
  "pu-darla-4",
  "pu-darla-5",
  "pu-waffutu-1",
  "pu-waffutu-2",
  "pu-waffutu-3",
  "pu-waffutu-4",
  "pu-waffutu-5",
  "pu-don-bernice-1",
  "pu-don-bernice-2",
  "pu-don-bernice-3",
  "pu-don-bernice-4",
  "pu-don-bernice-5",
  "pu-uptown-moe-1",
  "pu-uptown-moe-2",
  "pu-uptown-moe-3",
  "pu-uptown-moe-4",
  "pu-uptown-moe-5",
  "pu-brrrick-1",
  "pu-brrrick-2",
  "pu-brrrick-3",
  "pu-brrrick-4",
  "pu-brrrick-5",
];

triggerIDs.forEach((triggerID, index) => {
  const triggerElement = document.querySelector(`#${triggerID}`);
  const targetElement = document.querySelector(`#${targetIDs[index]}`);

  triggerElement.addEventListener("click", () => {
    // Create your GSAP timeline and play it here
    const gmPopUp = gsap.timeline({
      defaults: { duration: 0.4, ease: "power3.out" },
    });
    // Add your animations to the timeline, targeting the corresponding target element
    gmPopUp.to(targetElement, { opacity: 1, display: "flex", y: "0%" }, 0);
    gmPopUp.to(".game-set-close", { opacity: 0, display: "none" }, "<");
    // Play the timeline
    gmPopUp.play();
  });
});

// Close Pop Ups

const closePUs = document.querySelectorAll(".game-popup-close__wrap");

closePUs.forEach((closepu) => {
  closepu.addEventListener("click", () => {
    // Create your GSAP timeline and play it here
    const popUpClose = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.in" },
    });
    // Add your animations to the timeline
    popUpClose.to(".game-popup", { opacity: 0, display: "none", y: "250%" }, 0);
    popUpClose.to(".game-set-close", { opacity: 1, display: "flex" }, "<");
    // Play the timeline
    popUpClose.play();
  });
});