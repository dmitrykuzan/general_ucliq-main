export const pathnames = () => {
  if (
    window.location.href ===
    "https://abozhenko-dev.github.io/general_ucliq/#demo"
  ) {
    const demoBtn = document.querySelector(".header__free");
    demoBtn.click();
  }

  if (
    window.location.href ===
    "https://abozhenko-dev.github.io/general_ucliq/#subscribe"
  ) {
    const subscribeBtn = document.querySelector(".header__sub");
    subscribeBtn.click();
  }
};
