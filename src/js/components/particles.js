export const particles = () => {
  const particlesEl = document.querySelector(".hero__particles");
  if (particlesEl) {
    particlesJS.load(
      "particles--1",
      "json/particles.json",
      function () {}
    );
  }
};
