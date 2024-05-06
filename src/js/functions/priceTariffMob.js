export const priceTariffMob = () => {
  const parent = document.querySelector(".price__section--mobile");

  const priceHandler = (e) => {
    const parent = e.target.closest(".price__slide--mobile");
    console.log(parent);
    console.log(e.target);
    if (parent.classList.contains("active")) {
      parent.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      parent.classList.remove("active");
      e.target.closest(".price__control--mobile").firstElementChild.innerHTML =
        "Show more";
    } else {
      parent.classList.add("active");
      e.target.closest(".price__control--mobile").firstElementChild.innerHTML =
        "Show less";
    }
  };

  if (parent) {
    const priceBtns = parent.querySelectorAll(".price__control--mobile");

    priceBtns.forEach((btn) => {
      btn.addEventListener("click", priceHandler);
    });
  }
};
