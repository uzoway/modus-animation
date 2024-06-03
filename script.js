gsap.registerPlugin(CustomEase);

// CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");
CustomEase.create("ease-in-quad", "0.55,0.085,0.68,0.53");
CustomEase.create("ease-out-quad", "0.25,0.46,0.45,0.94");
CustomEase.create("ease-in-out-circ", "0.785,0.135,0.15,0.86");

function initializeAnimation() {
  const loaderAnimationTl = gsap.timeline({
    delay: 0.7,
    defaults: { ease: "ease-out-quad" },
  });

  loaderAnimationTl
    .to(".preloader__text span", {
      y: 0,
      duration: 1,
    })
    .to(".preloader__text span", {
      y: 105,
      duration: 1,
      ease: "ease-in-quad",
      delay: 2,
      onComplete: () => gsap.set(".preloader__text", { display: "none" }),
    })
    .to(
      ".navigation",
      {
        "--border-bottom-width": "100%",
        duration: 1.5,
        ease: "ease-in-out-circ",
      },
      "<"
    )

    .to(
      ".container__video .video__wrapper .video",
      {
        scaleX: 1,
        duration: 1.5,
        ease: "ease-in-out-circ",
      },
      "<0.8"
    )
    .to(
      [
        ".navigation__logo .navigation__logo--text",
        ".navigation__time .navigation__time--text",
        ".navigation__list--item a",
      ],
      {
        y: 0,
        stagger: {
          amount: 1,
        },
      },
      "<"
    )

    .to(
      ".container__heading1 .heading__line span",
      {
        y: 0,
        stagger: {
          amount: 0.23,
        },
      },
      "<0.45"
    )
    .to(
      ".container__heading2 .heading__line span",
      {
        y: 0,
        stagger: {
          amount: 0.23,
        },
      },
      "<"
    )

    .to(
      [
        ".video__wrapper .video__duration span",
        ".video__wrapper .video__button span",
      ],
      {
        y: 0,
        duration: 1,
      },
      "<"
    )

    .to(".video__wrapper .video", {
      "--overlay-opacity": 0,
      duration: 1,
      delay: 0.3,
    });
}

window.addEventListener("DOMContentLoaded", initializeAnimation);

// Toggle the grid visualizer
document.addEventListener("keydown", (event) => {
  if (event.shiftKey && event.key.toLowerCase() === "g") {
    document.querySelector(".overlay").classList.toggle("active");
  }
});
