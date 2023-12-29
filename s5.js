document.addEventListener("DOMContentLoaded", function () {
  //
  //
  // ---------- Master > Sections > S5 > Cards > OFF Click Reset ----------
  //
  //
  const directS5 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.5, ease: "back" },
  });
  const directS5mb = gsap.timeline();

  directS5.add(() => {
    if (window.innerWidth <= 991) {
      directS5mb.to(
        "#s5-prev",
        { opacity: 0.2, pointerEvents: "none", zIndex: 1, scale: 0.85 },
        0,
      );
      directS5mb.to(
        "#s5-next",
        { opacity: 0.2, pointerEvents: "none", zIndex: 1, scale: 0.85 },
        0,
      );
      directS5mb.to(
        "#s5-nav",
        { opacity: 0.2, pointerEvents: "none", zIndex: 1, scale: 0.85 },
        0,
      );
      directS5mb.to(".table", { yPercent: 200 }, 0);
      directS5mb.to(".figure", { yPercent: 200, pointerEvents: "none" }, 0);
    }
  }, "<");
  directS5.add(directS5mb, 0);
  directS5.to(".direction-s5__wrap", { opacity: 0 }, 0);
  directS5.to(".posters", { opacity: 0, pointerEvents: "none" }, 0);
  directS5.to("#s5-title", { opacity: 0 }, 0);

  //
  //
  // ---------- Master > Sections > S5 > Cards > Social ----------
  //
  //
  const flipSocial = gsap.timeline({
    paused: true,
    defaults: { duration: 0.5, ease: "back" },
  });

  // Add animations the timeline
  flipSocial.to(".card-sides.cc-s5", { rotateY: 180 }, 0);
  flipSocial.to(
    ".card-sides.cc-s5 > .card-side.cc-card-front",
    { opacity: 0 },
    0,
  );
  flipSocial.to(
    ".card-sides.cc-s5 > .card-side.cc-card-back",
    { display: "flex" },
    0,
  );

  let socialFlipped = false;

  // Add click event listener to #flip-1
  const flip1 = document.querySelector("#flip-1");
  flip1.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (socialFlipped) {
      flipSocial.reverse();
    } else {
      flipSocial.play();
    }

    socialFlipped = !socialFlipped;
  });

  // Add click event listener to #flip-2
  const flip2 = document.querySelector("#flip-2");
  flip2.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (socialFlipped) {
      flipSocial.reverse();
    } else {
      flipSocial.play();
    }

    socialFlipped = !socialFlipped;
  });

  // Add click event listener to #flip-3
  const flip3 = document.querySelector("#flip-3");
  flip3.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (socialFlipped) {
      flipSocial.reverse();
    } else {
      flipSocial.play();
    }

    socialFlipped = !socialFlipped;
  });

  // Add click event listener to #flip-4
  const flip4 = document.querySelector("#flip-4");
  flip4.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (socialFlipped) {
      flipSocial.reverse();
    } else {
      flipSocial.play();
    }

    socialFlipped = !socialFlipped;
  });

  // Add click event listener to #flip-5
  const flip5 = document.querySelector("#flip-5");
  flip5.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (socialFlipped) {
      flipSocial.reverse();
    } else {
      flipSocial.play();
    }

    socialFlipped = !socialFlipped;
  });

  // Add click event listener to #flip-16
  const flip6 = document.querySelector("#flip-6");
  flip6.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    if (socialFlipped) {
      flipSocial.reverse();
    } else {
      flipSocial.play();
    }

    socialFlipped = !socialFlipped;
  });

  //
  //
  // ---------- Master > Sections > S5 > Posters > Poster 1 ----------
  //
  //

  const poster1 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.3, ease: "back" },
  });

  // Add animations to the timeline
  poster1.to(".poster-popups", { display: "flex", opacity: 1, zIndex: 10 }, 0);
  poster1.set("#popup-2", { display: "none", duration: 0 }, 0);
  poster1.set("#popup-3", { display: "none", duration: 0 }, 0);
  poster1.set("#popup-4", { display: "none", duration: 0 }, 0);
  poster1.set("#popup-5", { display: "none", duration: 0 }, 0);
  poster1.set("#popup-6", { display: "none", duration: 0 }, 0);
  poster1.to("#poster-1", { y: -50, opacity: 0 }, 0);
  poster1.to("#popup-1", { y: 0, rotation: 0, opacity: 1, display: "flex" }, "<+0.1");

  // Add click event listener to #card-kerwin
  document
    .querySelector("#poster-1")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster1.play();
      directS5.play();
    });

  document
    .querySelector("#s5-kerwin")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster1.play();
      directS5.play();
    });

  // Add click event listener to #card-kerwin
  document
    .querySelector("#pu-close-1")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster1.reverse();
      flipSocial.reverse();
      directS5.reverse();
    });

  //
  //
  // ---------- Master > Sections > S5 > Posters > Poster 2 ----------
  //
  //

  const poster2 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.3, ease: "back" },
  });

  // Add animations to the timeline
  poster2.to(".poster-popups", { display: "flex", opacity: 1, zIndex: 10 }, 0);
  poster2.set("#popup-1", { display: "none", duration: 0 }, 0);
  poster2.set("#popup-3", { display: "none", duration: 0 }, 0);
  poster2.set("#popup-4", { display: "none", duration: 0 }, 0);
  poster2.set("#popup-5", { display: "none", duration: 0 }, 0);
  poster2.set("#popup-6", { display: "none", duration: 0 }, 0);
  poster2.to("#poster-2", { y: -50, opacity: 0 }, 0);
  poster2.to("#popup-2", { y: 0, rotation: 0, opacity: 1, display: "flex" }, "<+0.1");

  // Add click event listener to #card-kerwin
  document
    .querySelector("#poster-2")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster2.play();
      directS5.play();
    });

  document
    .querySelector("#s5-waffutu")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster2.play();
      directS5.play();
    });

  // Add click event listener to #card-kerwin
  document
    .querySelector("#pu-close-2")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster2.reverse();
      flipSocial.reverse();
      directS5.reverse();
    });

  //
  //
  // ---------- Master > Sections > S5 > Posters > Poster 3 ----------
  //
  //

  const poster3 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.3, ease: "back" },
  });

  // Add animations to the timeline
  poster3.to(".poster-popups", { display: "flex", opacity: 1, zIndex: 10 }, 0);
  poster3.set("#popup-1", { display: "none", duration: 0 }, 0);
  poster3.set("#popup-2", { display: "none", duration: 0 }, 0);
  poster3.set("#popup-4", { display: "none", duration: 0 }, 0);
  poster3.set("#popup-5", { display: "none", duration: 0 }, 0);
  poster3.set("#popup-6", { display: "none", duration: 0 }, 0);
  poster3.to("#poster-3", { y: -50, opacity: 0 }, 0);
  poster3.to("#popup-3", { y: 0, rotation: 0, opacity: 1, display: "flex" }, "<+0.1");

  // Add click event listener to #card-kerwin
  document
    .querySelector("#poster-3")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster3.play();
      directS5.play();
    });

  document
    .querySelector("#s5-darla")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster3.play();
      directS5.play();
    });

  // Add click event listener to #card-kerwin
  document
    .querySelector("#pu-close-3")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster3.reverse();
      flipSocial.reverse();
      directS5.reverse();
    });

  //
  //
  // ---------- Master > Sections > S5 > Posters > Poster 4 ----------
  //
  //

  const poster4 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.3, ease: "back" },
  });

  // Add animations to the timeline
  poster4.to(".poster-popups", { display: "flex", opacity: 1, zIndex: 10 }, 0);
  poster4.set("#popup-1", { display: "none", duration: 0 }, 0);
  poster4.set("#popup-2", { display: "none", duration: 0 }, 0);
  poster4.set("#popup-3", { display: "none", duration: 0 }, 0);
  poster4.set("#popup-5", { display: "none", duration: 0 }, 0);
  poster4.set("#popup-6", { display: "none", duration: 0 }, 0);
  poster4.to("#poster-4", { y: -50, opacity: 0 }, 0);
  poster4.to("#popup-4", { y: 0, rotation: 0, opacity: 1, display: "flex" }, "<+0.1");

  // Add click event listener to #card-kerwin
  document
    .querySelector("#poster-4")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster4.play();
      directS5.play();
    });

  document
    .querySelector("#s5-don-bernice")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster4.play();
      directS5.play();
    });

  // Add click event listener to #card-kerwin
  document
    .querySelector("#pu-close-4")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster4.reverse();
      flipSocial.reverse();
      directS5.reverse();
    });

  //
  //
  // ---------- Master > Sections > S5 > Posters > Poster 5 ----------
  //
  //

  const poster5 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.3, ease: "back" },
  });

  // Add animations to the timeline
  poster5.to(".poster-popups", { display: "flex", opacity: 1, zIndex: 10 }, 0);
  poster5.set("#popup-1", { display: "none", duration: 0 }, 0);
  poster5.set("#popup-2", { display: "none", duration: 0 }, 0);
  poster5.set("#popup-3", { display: "none", duration: 0 }, 0);
  poster5.set("#popup-4", { display: "none", duration: 0 }, 0);
  poster5.set("#popup-6", { display: "none", duration: 0 }, 0);
  poster5.to("#poster-5", { y: -50, opacity: 0 }, 0);
  poster5.to("#popup-5", { y: 0, rotation: 0, opacity: 1, display: "flex" }, "<+0.1");


  // Add click event listener to #card-kerwin
  document
    .querySelector("#poster-5")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster5.play();
      directS5.play();
    });

  document
    .querySelector("#s5-uptown-moe")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster5.play();
      directS5.play();
    });

  // Add click event listener to #card-kerwin
  document
    .querySelector("#pu-close-5")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster5.reverse();
      flipSocial.reverse();
      directS5.reverse();
    });

  //
  //
  // ---------- Master > Sections > S5 > Posters > Poster 6 ----------
  //
  //

  const poster6 = gsap.timeline({
    paused: true,
    defaults: { duration: 0.3, ease: "back" },
  });

  // Add animations to the timeline
  poster6.to(".poster-popups", { display: "flex", opacity: 1, zIndex: 10 }, 0);
  poster6.set("#popup-1", { display: "none", duration: 0 }, 0);
  poster6.set("#popup-2", { display: "none", duration: 0 }, 0);
  poster6.set("#popup-3", { display: "none", duration: 0 }, 0);
  poster6.set("#popup-4", { display: "none", duration: 0 }, 0);
  poster6.set("#popup-5", { display: "none", duration: 0 }, 0);
  poster6.to("#poster-6", { y: -50, opacity: 0 }, 0);
  poster6.to("#popup-6", { y: 0, rotation: 0, opacity: 1, display: "flex" }, "<+0.1");

  // Add click event listener to #card-kerwin
  document
    .querySelector("#poster-6")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster6.play();
      directS5.play();
    });

  document
    .querySelector("#s5-brrrick")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster6.play();
      directS5.play();
    });

  // Add click event listener to #card-kerwin
  document
    .querySelector("#pu-close-6")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event bubbling

      // Play the timeline
      poster6.reverse();
      flipSocial.reverse();
      directS5.reverse();
    });
});
