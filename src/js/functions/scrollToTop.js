export const scrollToTop = () => {
  const scrollUp = document.querySelector(".go-up");
  let goUpSectionHeight = null,
    getTop = null;

  if (scrollUp) {
    goUpSectionHeight = document.querySelector(".section--go-up").offsetHeight;

    getTop = () =>
      (window.pageYOffset || document.documentElement.scrollTop) +
      window.innerHeight;

    window.addEventListener("scroll", scroll);

    scrollUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
      });
    });

    scroll();
  }

  function scroll() {
    if (getTop() > goUpSectionHeight + window.innerHeight) {
      scrollUp.classList.add("go-up--active");
    } else {
      scrollUp.classList.remove("go-up--active");
    }
  }
};
