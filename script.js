gsap.registerPlugin(CustomEase);
// CustomEase.create("ease-out-cubic", "0.215,0.61,0.355,1");


function initializeAnimation() {

}

window.addEventListener("DOMContentLoaded", initializeAnimation);


// Uncomment to be able to toggle the grid visualizer
document.addEventListener("keydown", (event) => {
    if (event.shiftKey && event.key.toLowerCase() === "g") {
      document.querySelector(".overlay").classList.toggle("active");
    }
});