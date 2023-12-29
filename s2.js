//
//
// ---------- Master > Sections > S2 > Cards > OFF Click Reset ----------
//
//
const directS2 = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

directS2.to(".speech.cc-s2", { opacity: 0 }, 0);
directS2.to(".speech.cc-s2 > .point", { rotate: 30 }, 0);
directS2.to(".direction.cc-s2", { opacity: 1 }, 0);
directS2.from(".direction.cc-s2 > .point", { rotate: -30 }, 0);
directS2.to(
  "#s2-prev",
  { opacity: 0.2, pointerEvents: "none", zIndex: 1, scale: 0.85 },
  0,
);
directS2.to(
  "#s2-next",
  { opacity: 0.2, pointerEvents: "none", zIndex: 1, scale: 0.85 },
  0,
);
directS2.to("#s2-title", { opacity: 0 }, 0);
directS2.to(
  "#s2-nav",
  {
    opacity: 0.2,
    pointerEvents: "none",
    zIndex: 1,
    scale: 0.85,
  },
  0,
);

//
//
// ---------- Master > Sections > S2 > Cards > Kerwin ----------
//
//
const flipKerwin = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Add animations to the timeline
flipKerwin.to("#card-kerwin > .card-sides", { rotateY: 180 }, 0);
flipKerwin.to(
  "#card-kerwin > .card-sides > .card-side.cc-card-front",
  { opacity: 0 },
  0,
);
flipKerwin.to(
  "#card-kerwin > .card-sides > .card-side.cc-card-back",
  { display: "flex" },
  0,
);
flipKerwin.to(
  "#card-kerwin > .buddy-desc__wrap",
  { display: "flex", opacity: 1 },
  0,
);

let kerwinFlipped = false;
document
  .querySelector("#flip-kerwin")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (kerwinFlipped) {
      flipKerwin.reverse();
    } else {
      flipKerwin.play();
    }

    kerwinFlipped = !kerwinFlipped;
  });

const cardKerwin = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Set up the mobile breakpoint
const cardKerwinMB = window.matchMedia("(max-width: 991px)");

// Function to handle animations for mobile
function handleKerwinMB() {
  if (cardKerwinMB.matches) {
    // Add animations to the timeline
    cardKerwin.to(
      "#card-kerwin",
      { xPercent: 0, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardKerwin.to(
      "#card-darla",
      { xPercent: -250, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardKerwin.to(
      "#card-waffutu",
      {
        xPercent: -150,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardKerwin.to(
      "#card-don-bernice",
      {
        xPercent: -350,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardKerwin.to(
      "#card-uptown-moe",
      {
        xPercent: -450,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardKerwin.to(
      "#card-brrrick",
      {
        xPercent: -550,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardKerwin.to(
      "#card-kerwin > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  } else {
    // Add animations to the timeline
    cardKerwin.to(
      "#card-kerwin",
      { xPercent: 250, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardKerwin.to(
      "#card-darla",
      { xPercent: 50, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardKerwin.to(
      "#card-waffutu",
      { xPercent: 150, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardKerwin.to(
      "#card-don-bernice",
      {
        xPercent: -130,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardKerwin.to(
      "#card-uptown-moe",
      {
        xPercent: -200,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardKerwin.to(
      "#card-brrrick",
      {
        xPercent: -300,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardKerwin.to(
      "#card-kerwin > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  }
}

// Initial call to handle animations based on the viewport width
handleKerwinMB();

// Listen for viewport width changes
cardKerwinMB.addListener(handleKerwinMB);

// Add click event listener to #card-kerwin
document
  .querySelector("#card-kerwin")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling

    // Play the timeline
    cardKerwin.play();
    directS2.play();
  });

// Add click event listener to the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is outside of #card-kerwin
  if (!event.target.closest("#card-kerwin")) {
    // Reverse the timeline
    cardKerwin.reverse();
    flipKerwin.reverse();
    directS2.reverse();
    kerwinFlipped = false;
  }
});

//
//
// ---------- Master > Sections > S2 > Cards > Waffutu ----------
//
//
const flipWaffutu = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Add animations to the timeline
flipWaffutu.to("#card-waffutu > .card-sides", { rotateY: 180 }, 0);
flipWaffutu.to(
  "#card-waffutu > .card-sides > .card-side.cc-card-front",
  { opacity: 0 },
  0,
);
flipWaffutu.to(
  "#card-waffutu > .card-sides > .card-side.cc-card-back",
  { display: "flex" },
  0,
);
flipWaffutu.to(
  "#card-waffutu > .buddy-desc__wrap",
  { display: "flex", opacity: 1 },
  0,
);

let waffutuFlipped = false;
document
  .querySelector("#flip-waffutu")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (waffutuFlipped) {
      flipWaffutu.reverse();
    } else {
      flipWaffutu.play();
    }

    waffutuFlipped = !waffutuFlipped;
  });
const cardWaffutu = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Set up the mobile breakpoint
const cardWaffutuMB = window.matchMedia("(max-width: 991px)");

// Function to handle animations for mobile
function handleWaffutu() {
  if (cardWaffutuMB.matches) {
    // Add animations to the timeline
    cardWaffutu.to(
      "#card-kerwin",
      { xPercent: -150, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardWaffutu.to(
      "#card-waffutu",
      { xPercent: -102, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardWaffutu.to(
      "#card-darla",
      { xPercent: -250, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardWaffutu.to(
      "#card-don-bernice",
      {
        xPercent: -350,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardWaffutu.to(
      "#card-uptown-moe",
      {
        xPercent: -450,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardWaffutu.to(
      "#card-brrrick",
      { xPercent: -550, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardWaffutu.to(
      "#card-waffutu > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  } else {
    // Add animations to the timeline
    cardWaffutu.to(
      "#card-kerwin",
      { xPercent: 180, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardWaffutu.to(
      "#card-waffutu",
      { xPercent: 150, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardWaffutu.to(
      "#card-darla",
      { xPercent: 30, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardWaffutu.to(
      "#card-don-bernice",
      {
        xPercent: -50,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardWaffutu.to(
      "#card-uptown-moe",
      {
        xPercent: -200,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardWaffutu.to(
      "#card-brrrick",
      { xPercent: -300, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardWaffutu.to(
      "#card-waffutu > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  }
}

// Initial call to handle animations based on the viewport width
handleWaffutu();

// Listen for viewport width changes
cardWaffutuMB.addListener(handleWaffutu);

// Add click event listener to #card-darla
document
  .querySelector("#card-waffutu")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling

    // Play the timeline
    cardWaffutu.play();
    directS2.play();
  });

// Add click event listener to the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is outside of #card-kerwin
  if (!event.target.closest("#card-waffutu")) {
    // Reverse the timeline
    cardWaffutu.reverse();
    flipWaffutu.reverse();
    directS2.reverse();
    waffutuFlipped = false;
  }
});

//
//
// ---------- Master > Sections > S2 > Cards > Darla ----------
//
//
const flipDarla = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Add animations to the timeline
flipDarla.to("#card-darla > .card-sides", { rotateY: 180 }, 0);
flipDarla.to(
  "#card-darla > .card-sides > .card-side.cc-card-front",
  { opacity: 0 },
  0,
);
flipDarla.to(
  "#card-darla > .card-sides > .card-side.cc-card-back",
  { display: "flex" },
  0,
);
flipDarla.to(
  "#card-darla > .buddy-desc__wrap",
  { display: "flex", opacity: 1 },
  0,
);

let darlaFlipped = false;
document
  .querySelector("#flip-darla")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (darlaFlipped) {
      flipDarla.reverse();
    } else {
      flipDarla.play();
    }

    darlaFlipped = !darlaFlipped;
  });
const cardDarla = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Set up the mobile breakpoint
const cardDarlaMB = window.matchMedia("(max-width: 991px)");

// Function to handle animations for mobile
function handleDarlaMB() {
  if (cardDarlaMB.matches) {
    // Add animations to the timeline
    cardDarla.to(
      "#card-kerwin",
      {
        xPercent: -250,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardDarla.to(
      "#card-waffutu",
      { xPercent: -150, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardDarla.to(
      "#card-darla",
      { xPercent: -204, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardDarla.to(
      "#card-don-bernice",
      {
        xPercent: -350,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardDarla.to(
      "#card-uptown-moe",
      {
        xPercent: -450,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardDarla.to(
      "#card-brrrick",
      {
        xPercent: -550,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardDarla.to(
      "#card-darla > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  } else {
    // Add animations to the timeline
    cardDarla.to(
      "#card-kerwin",
      { xPercent: 180, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardDarla.to(
      "#card-waffutu",
      { xPercent: 100, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardDarla.to(
      "#card-darla",
      { xPercent: 50, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardDarla.to(
      "#card-don-bernice",
      {
        xPercent: -130,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardDarla.to(
      "#card-uptown-moe",
      {
        xPercent: -200,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardDarla.to(
      "#card-brrrick",
      {
        xPercent: -300,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardDarla.to(
      "#card-darla > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  }
}

// Initial call to handle animations based on the viewport width
handleDarlaMB();

// Listen for viewport width changes
cardDarlaMB.addListener(handleDarlaMB);

// Add click event listener to #card-kerwin
document
  .querySelector("#card-darla")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling

    // Play the timeline
    cardDarla.play();
    directS2.play();
  });

// Add click event listener to the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is outside of #card-kerwin
  if (!event.target.closest("#card-darla")) {
    // Reverse the timeline
    cardDarla.reverse();
    flipDarla.reverse();
    directS2.reverse();
    darlaFlipped = false;
  }
});

//
//
// ---------- Master > Sections > S2 > Cards > Don Bernice ----------
//
//
const flipBernice = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Add animations to the timeline
flipBernice.to("#card-don-bernice > .card-sides", { rotateY: 180 }, 0);
flipBernice.to(
  "#card-don-bernice > .card-sides > .card-side.cc-card-front",
  { opacity: 0 },
  0,
);
flipBernice.to(
  "#card-don-bernice > .card-sides > .card-side.cc-card-back",
  { display: "flex" },
  0,
);
flipBernice.to(
  "#card-don-bernice > .buddy-desc__wrap",
  { display: "flex", opacity: 1 },
  0,
);

let berniceFlipped = false;
document
  .querySelector("#flip-don-bernice")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (berniceFlipped) {
      flipBernice.reverse();
    } else {
      flipBernice.play();
    }

    berniceFlipped = !berniceFlipped;
  });
const cardBernice = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Set up the mobile breakpoint
const cardBerniceMB = window.matchMedia("(max-width: 991px)");

// Function to handle animations for mobile
function handleBerniceMB() {
  if (cardBerniceMB.matches) {
    // Add animations to the timeline
    cardBernice.to(
      "#card-kerwin",
      {
        xPercent: -350,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBernice.to(
      "#card-darla",
      { xPercent: -250, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardBernice.to(
      "#card-waffutu",
      {
        xPercent: -150,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBernice.to(
      "#card-don-bernice",
      { xPercent: -306, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardBernice.to(
      "#card-uptown-moe",
      {
        xPercent: -450,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBernice.to(
      "#card-brrrick",
      {
        xPercent: -550,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBernice.to(
      "#card-don-bernice > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  } else {
    // Add animations to the timeline
    cardBernice.to(
      "#card-kerwin",
      { xPercent: 180, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardBernice.to(
      "#card-darla",
      { xPercent: 50, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardBernice.to(
      "#card-waffutu",
      { xPercent: 150, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardBernice.to(
      "#card-don-bernice",
      { xPercent: -50, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardBernice.to(
      "#card-uptown-moe",
      {
        xPercent: -200,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBernice.to(
      "#card-brrrick",
      {
        xPercent: -300,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBernice.to(
      "#card-don-bernice > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  }
}

// Initial call to handle animations based on the viewport width
handleBerniceMB();

// Listen for viewport width changes
cardBerniceMB.addListener(handleBerniceMB);

// Add click event listener to #card-kerwin
document
  .querySelector("#card-don-bernice")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling

    // Play the timeline
    cardBernice.play();
    directS2.play();
  });

// Add click event listener to the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is outside of #card-kerwin
  if (!event.target.closest("#card-don-bernice")) {
    // Reverse the timeline
    cardBernice.reverse();
    flipBernice.reverse();
    directS2.reverse();
    berniceFlipped = false;
  }
});

//
//
// ---------- Master > Sections > S2 > Cards > Uptown Moe ----------
//
//
const flipMoe = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Add animations to the timeline
flipMoe.to("#card-uptown-moe > .card-sides", { rotateY: 180 }, 0);
flipMoe.to(
  "#card-uptown-moe > .card-sides > .card-side.cc-card-front",
  { opacity: 0 },
  0,
);
flipMoe.to(
  "#card-uptown-moe > .card-sides > .card-side.cc-card-back",
  { display: "flex" },
  0,
);
flipMoe.to(
  "#card-uptown-moe > .buddy-desc__wrap",
  { display: "flex", opacity: 1 },
  0,
);

let moeFlipped = false;
document
  .querySelector("#flip-uptown-moe")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (moeFlipped) {
      flipMoe.reverse();
    } else {
      flipMoe.play();
    }

    moeFlipped = !moeFlipped;
  });
const cardMoe = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Set up the mobile breakpoint
const cardMoeMB = window.matchMedia("(max-width: 991px)");

// Function to handle animations for mobile
function handleMoeMB() {
  if (cardMoeMB.matches) {
    // Add animations to the timeline
    cardMoe.to(
      "#card-kerwin",
      { xPercent: -350, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardMoe.to(
      "#card-darla",
      { xPercent: -250, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardMoe.to(
      "#card-waffutu",
      { xPercent: -150, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardMoe.to(
      "#card-don-bernice",
      {
        xPercent: -350,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardMoe.to(
      "#card-uptown-moe",
      { xPercent: -408, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardMoe.to(
      "#card-brrrick",
      { xPercent: -550, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardMoe.to(
      "#card-uptown-moe > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  } else {
    // Add animations to the timeline
    cardMoe.to(
      "#card-kerwin",
      { xPercent: 180, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardMoe.to(
      "#card-darla",
      { xPercent: 50, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardMoe.to(
      "#card-waffutu",
      { xPercent: 150, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardMoe.to(
      "#card-don-bernice",
      {
        xPercent: -50,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardMoe.to(
      "#card-uptown-moe",
      { xPercent: -150, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardMoe.to(
      "#card-brrrick",
      { xPercent: -300, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardMoe.to(
      "#card-uptown-moe > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  }
}

// Initial call to handle animations based on the viewport width
handleMoeMB();

// Listen for viewport width changes
cardMoeMB.addListener(handleMoeMB);

// Add click event listener to #card-kerwin
document
  .querySelector("#card-uptown-moe")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling

    // Play the timeline
    cardMoe.play();
    directS2.play();
  });

// Add click event listener to the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is outside of #card-kerwin
  if (!event.target.closest("#card-uptown-moe")) {
    // Reverse the timeline
    cardMoe.reverse();
    flipMoe.reverse();
    directS2.reverse();
    moeFlipped = false;
  }
});

//
//
// ---------- Master > Sections > S2 > Cards > Brrrick ----------
//
//
const flipBrrrick = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Add animations to the timeline
flipBrrrick.to("#card-brrrick > .card-sides", { rotateY: 180 }, 0);
flipBrrrick.to(
  "#card-brrrick > .card-sides > .card-side.cc-card-front",
  { opacity: 0 },
  0,
);
flipBrrrick.to(
  "#card-brrrick > .card-sides > .card-side.cc-card-back",
  { display: "flex" },
  0,
);
flipBrrrick.to(
  "#card-brrrick > .buddy-desc__wrap",
  { display: "flex", opacity: 1 },
  0,
);

let brrrickFlipped = false;
document
  .querySelector("#flip-brrrick")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (brrrickFlipped) {
      flipBrrrick.reverse();
    } else {
      flipBrrrick.play();
    }

    brrrickFlipped = !brrrickFlipped;
  });
const cardBrrrick = gsap.timeline({
  paused: true,
  defaults: { duration: 0.5, ease: "back" },
});

// Set up the mobile breakpoint
const cardBrrrickMB = window.matchMedia("(max-width: 991px)");

// Function to handle animations for mobile
function handleBrrrickMB() {
  if (cardBrrrickMB.matches) {
    // Add animations to the timeline
    cardBrrrick.to(
      "#card-kerwin",
      {
        xPercent: -350,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBrrrick.to(
      "#card-darla",
      { xPercent: -250, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardBrrrick.to(
      "#card-waffutu",
      {
        xPercent: -150,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBrrrick.to(
      "#card-don-bernice",
      {
        xPercent: -350,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBrrrick.to(
      "#card-uptown-moe",
      {
        xPercent: -450,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBrrrick.to(
      "#card-brrrick",
      { xPercent: -510, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardBrrrick.to(
      "#card-brrrick > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  } else {
    // Add animations to the timeline
    cardBrrrick.to(
      "#card-kerwin",
      { xPercent: 250, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardBrrrick.to(
      "#card-darla",
      { xPercent: 50, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardBrrrick.to(
      "#card-waffutu",
      { xPercent: 150, pointerEvents: "none", zIndex: 1, scale: 0.85 },
      0,
    );
    cardBrrrick.to(
      "#card-don-bernice",
      {
        xPercent: -70,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBrrrick.to(
      "#card-uptown-moe",
      {
        xPercent: -170,
        pointerEvents: "none",
        zIndex: 1,
        scale: 0.85,
      },
      0,
    );
    cardBrrrick.to(
      "#card-brrrick",
      { xPercent: -250, rotate: 0, scale: 1.05, zIndex: 5 },
      0,
    );
    cardBrrrick.to(
      "#card-brrrick > .flip-card__wrap",
      {
        display: "flex",
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      },
      0,
    );
  }
}

// Initial call to handle animations based on the viewport width
handleBrrrickMB();

// Listen for viewport width changes
cardBrrrickMB.addListener(handleBrrrickMB);

// Add click event listener to #card-kerwin
document
  .querySelector("#card-brrrick")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling

    // Play the timeline
    cardBrrrick.play();
    directS2.play();
  });

// Add click event listener to the document
document.addEventListener("click", function (event) {
  // Check if the clicked element is outside of #card-kerwin
  if (!event.target.closest("#card-brrrick")) {
    // Reverse the timeline
    cardBrrrick.reverse();
    flipBrrrick.reverse();
    directS2.reverse();
    brrrickFlipped = false;
  }
});
