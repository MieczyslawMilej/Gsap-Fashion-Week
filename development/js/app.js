document.addEventListener("DOMContentLoaded", () => {
  new hoverEffect({
    parent: document.querySelector(".distortion"),
    intensity: 0.2,
    image1: "./images/01.png",
    image2: "./images/02.png",
    displacementImage: "./images/diss.png",
    imagesRatio: 380 / 300
  });

  // NAVBAR

  gsap.from(".navbar div", {
    duration: 1.5,
    delay: 1.5,
    opacity: 0,
    y: "20",
    ease: "expo.inOut",
    stagger: 0.08
  });

  // MEADIA

  gsap.from(".media ul li", {
    duration: 1.5,
    delay: 1.5,
    opacity: 0,
    x: "-20",
    ease: "expo.inOut",
    stagger: 0.08
  });

  // TEXT

  gsap.from(".hidetext", {
    duration: 1.5,
    delay: 1,
    y: "100%",
    ease: "expo.inOut",
    stagger: 0.15
  });

  gsap.from(".text h2", {
    duration: 1.5,
    delay: 1.6,
    opacity: 0,
    x: "-10000",
    ease: "expo.inOut"
  });

  //SPONSOR
  gsap.from(".sponsor img", {
    duration: 1.5,
    delay: 1.6,
    opacity: 0,
    y: "20",
    ease: "expo.inOut"
  });

  gsap.from(".sponsor p", {
    duration: 1.5,
    delay: 1.7,
    opacity: 0,
    y: "20",
    ease: "expo.inOut"
  });

  //DISTORTION

  gsap.from(".distortion", {
    duration: 1.5,
    delay: 2,
    opacity: 0,
    y: "20",
    scale: 0.5,
    ease: "expo.inOut"
  });

  //OVERLAY

  gsap.to(".overlay", {
    duration: 1.5,
    delay: 0.5,
    top: "-100%",
    ease: "expo.inOut",
    stagger: 0.2
  });

  // CIRCLE CURSOR
  const mouseCursor = document.querySelector(".cursor");
  const hoverLinks = document.querySelectorAll(".hover-link");

  window.addEventListener("mousemove", cursor);

  function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
  }

  document.addEventListener("click", () => {
    mouseCursor.classList.add("expand");

    setTimeout(() => {
      mouseCursor.classList.remove("expand");
    }, 500);
  });

  hoverLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      mouseCursor.classList.add("link-grow");
    });
    link.addEventListener("mouseleave", () => {
      mouseCursor.classList.remove("link-grow");
    });
  });
});
