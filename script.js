"use strict";

// DOM Variables
const background = document.querySelector("body");
const socialsContainer = document.querySelector(".socials__container");
const projectsSection = document.querySelector(".projects__section__container");
const projectsTitle = document.querySelector(".projects__title");

// Background Shift on Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const intersecting = entry.isIntersecting;
      background.style.backgroundColor = intersecting ? "#22345bb0" : "#fffbf6";
      projectsTitle.style.color = intersecting ? "white" : "#3d99e0bc";
    });
  },
  { threshold: 0.2 }
);

observer.observe(projectsSection);

// Socials container appear on entry
setTimeout(() => (socialsContainer.style.opacity = 1), 2000);
