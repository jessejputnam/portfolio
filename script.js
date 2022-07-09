"use strict";

// DOM Variables
const background = document.querySelector("body");
const projectsSection = document.querySelector(".projects__section__container");
const projectsTitle = document.querySelector(".projects__title");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      background.style.backgroundColor = intersecting ? "#1a759f" : "#fffbf6";
      projectsTitle.style.color = intersecting ? "white" : "#3d99e0bc";
    });
  },
  { threshold: 0.5 }
);

observer.observe(projectsSection);

// const projectsObserverOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.1
// };

// const handleIntersect = () => {
//   background.classList.add("projectsVisible");
// };

// const observer = new IntersectionObserver(
//   handleIntersect,
//   projectsObserverOptions
// );
