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
    { scale: 1, duration: 3, opacity: 1, y: "30vh" }
  )
  .fromTo(
    "#hero-dep",
    { scale: 0, opacity: 0 },
    { scale: 1, duration: 3, opacity: 1, y: "30vh" },
    "-=1"
  )
  .to("#boom", { duration: 3, x: "60vw", ease: "back(2)" })
  .to("#boom", { y: "-10vh", duration: 2 })
  .to("#boom", { x: "30vw", duration: 3 }, "-=2")
  .to("#hinge", { duration: 1, rotation: 50 }, "-=4")
  .to("#hinge", { y: "200vh", duration: 1 }, "-=3")
  .to("#hinge", { display: "none" }, "-=2");

//about ani
//1 about
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#ah1",
      // scroller: "#scrollsnap",
      scrub: 1,
      start: "top center",
      end: "top 25%",
    },
  })
  .from("#ah1", {
    duration: 3,
    x: "5vw",
    opacity: 0,
  })
  .from(
    "#ap1",
    {
      duration: 4,
      scale: 0,
      opacity: 0,
    },
    "-=1"
  );

//2 about
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#ah2",
      // scroller: "#scrollsnap",
      scrub: 1,
      start: "top center",
      end: "top 25%",
    },
  })
  .from("#ah2", {
    duration: 3,
    x: "5vw",
    opacity: 0,
  })
  .from(
    "#ap2",
    {
      duration: 4,
      scale: 0,
      opacity: 0,
    },
    "-=1"
  );

//3 about
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#ah3",
      //scroller: "#scrollsnap",
      scrub: 1,
      start: "top center",
      end: "top 25%",
    },
  })
  .from("#ah3", {
    duration: 3,
    x: "5vw",
    opacity: 0,
  })
  .from(
    "#ap3",
    {
      duration: 4,
      scale: 0,
      opacity: 0,
    },
    "-=1"
  );

//event pin
ScrollTrigger.create({
  trigger: "#ee",
  start: "top 0%",
  //scroller: "#scrollsnap",
  endTrigger: "#schedule",
  end: "top 60%",
  pin: "#ee",
});

//event1
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".event1",
      //scroller: "#scrollsnap",
      scrub: 1,
      start: "top 30%",
      end: "top 10%",
    },
  })
  .to(".event1", { duration: 5, x: "-15vw", opacity: 0 });

//event2
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".event2",
      //scroller: "#scrollsnap",
      scrub: 1,
      start: "top 60%",
      end: "top 10%",
    },
  })
  .from(".event2", {
    duration: 5,
    x: "-40vw",
    opacity: 0,
  })
  .to(".event2", { duration: 5, y: "-30vw", opacity: 0 });
//event3
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".event3",
      //scroller: "#scrollsnap",
      scrub: 1,
      start: "top 60%",
      end: "top 10%",
    },
  })
  .from(".event3", {
    duration: 5,
    x: "-40vw",
    opacity: 0,
  })
  .to(".event3", { duration: 5, y: "-30vw", opacity: 0 });
//event4
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".event4",
      //scroller: "#scrollsnap",
      scrub: 1,
      start: "top 60%",
      end: "top 10%",
    },
  })
  .from(".event4", {
    duration: 5,
    x: "-40vw",
    opacity: 0,
  })
  .to(".event4", { duration: 5, y: "-30vw", opacity: 0 });
//event5
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".event5",
      //scroller: "#scrollsnap",
      scrub: 1,
      start: "top 60%",
      end: "top 10%",
    },
  })
  .from(".event5", {
    duration: 5,
    x: "-40vw",
    opacity: 0,
  })
  .to(".event5", { duration: 5, y: "-30vw", opacity: 0 });
//event6
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".event6",
      //scroller: "#scrollsnap",
      scrub: 1,
      start: "top 60%",
      end: "top 10%",
    },
  })
  .from(".event6", {
    duration: 5,
    x: "-40vw",
    opacity: 0,
  })
  .to(".event6", { duration: 5, y: "-30vw", opacity: 0 });

//schedule
//schedule pin
ScrollTrigger.create({
  trigger: "#schedule",
  start: "top 0%",
  //scroller: "#scrollsnap",
  endTrigger: "#dev",
  end: "top 60%",
  pin: ".spin",
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#schedule",
      scrub: 1,
      start: "top 20%",
      endTrigger: "#dev",
      end: "top 90%",
    },
  })
  .from(".s", {
    duration: 1,
    opacity: 0,
  })
  .from(".st", {
    duration: 1,
    opacity: 0,
  })
  .from(".se", {
    duration: 1,
    x: "-30vw",
    opacity: 0,
  });
//dev
//dev pin
ScrollTrigger.create({
  trigger: "#dev",
  start: "top 30%",
  //scroller: "#scrollsnap",
  endTrigger: "#bl1",
  end: "bottom 60%",
  pin: ".cr",
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".creator",
      scrub: 1,
      start: "top 0%",
      endTrigger: "#dev",
      end: "bottom 10%",
    },
  })
  .from(".creator", {
    duration: 3,
    y: "-50vh",
    scale: 0,
    opacity: 0,
  })
  .from(".gt", { duration: 2, scale: 0, x: "30vw", opacity: 0 })
  .from(".ln", {
    duration: 2,
    y: "40px",
    opacity: 0,
  })
  .from(".gh", {
    duration: 2,
    y: "40px",
    opacity: 0,
  })
  .from(".is", {
    duration: 1,
    y: "40px",
    opacity: 0,
  })
  .from(".wa", {
    duration: 1,
    y: "40px",
    opacity: 0,
  })
  .from(".tg", {
    duration: 1,
    y: "40px",
    opacity: 0,
  });
//events redirection
document.getElementById("er1").addEventListener("click", () => {
  window.location.href = window.location.origin + "/event1";
});
document.getElementById("er2").addEventListener("click", () => {
  window.location.href = window.location.origin + "/event2";
});
document.getElementById("er3").addEventListener("click", () => {
  window.location.href = window.location.origin + "/event3";
});
document.getElementById("er4").addEventListener("click", () => {
  window.location.href = window.location.origin + "/event4";
});
document.getElementById("er5").addEventListener("click", () => {
  window.location.href = window.location.origin + "/event5";
});
document.getElementById("er6").addEventListener("click", () => {
  window.location.href = window.location.origin + "/event6";
});
