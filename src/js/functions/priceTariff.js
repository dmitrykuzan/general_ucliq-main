export const priceTariff = () => {
  const priceParent = document.querySelector(".price__section");

  const priceHandler = (e) => {
    if (priceParent.classList.contains("price__section--active")) {
      priceParent.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      priceParent.classList.remove("price__section--active");
      e.target.closest(".price__control").firstElementChild.innerHTML = "Show more";
    } else {
      priceParent.classList.add("price__section--active");
      e.target.closest(".price__control").firstElementChild.innerHTML = "Show less";
    }
  };

  // num - count price__service
  const minHeightForServices = (selector, num = null) => {
    let servicesNodes;

    if (num) {
      servicesNodes = [
        ...priceParent.querySelectorAll(`${selector}:nth-child(${num})`),
      ];
    } else {
      servicesNodes = [...priceParent.querySelectorAll(selector)];
    }

    // arr width elements' height
    const servicesArr = servicesNodes.map((item) => item.offsetHeight);

    const maxHeight = Math.max(...servicesArr);
    servicesNodes.forEach((item) => {
      item.style.minHeight = `${maxHeight}px`;
    });
  };

  if (priceParent) {
    const priceBtn = priceParent.querySelector(".price__control");
    minHeightForServices(".price__slide-header");
    minHeightForServices(".price__services .price__service", 1);
    minHeightForServices(".price__services .price__service", 2);
    minHeightForServices(".price__services .price__service", 3);
    minHeightForServices(".price__services .price__service", 4);
    minHeightForServices(".price__services .price__service", 5);
    priceBtn.addEventListener("click", priceHandler);
  }
};
