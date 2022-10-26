//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//  gsap

//hero ani
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline()
  .fromTo(
    "#title",
    {
      scale: 0,
      opacity: 0,
    },
    { scale: 1, duration: 3, opacity: 1, y: "40vh" }
  )
  .fromTo(
    "#hero-dep",
    { scale: 0, opacity: 0 },
    { scale: 1, duration: 3, opacity: 1, y: "40vh" },
    "-=1"
  )
  .to("#boom", { duration: 3, x: "60vw", ease: "back(2)" })
  .to("#boom", { y: "-10vh", duration: 2 })
  .to("#boom", { x: "30vw", duration: 3 }, "-=2")
  .to("#hinge", { duration: 1, rotation: 50 }, "-=4")
  .to("#hinge", { y: "200vh", duration: 1 }, "-=3")
  .to("#hinge", { display: "none" }, "-=2");
