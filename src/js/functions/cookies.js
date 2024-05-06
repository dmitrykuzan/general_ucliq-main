export const cookies = () => {
  const cookieBtn = document.querySelector(".cookies__btn");

  cookieBtn.addEventListener("click", () => {
    const goUpBtn = document.querySelector(".go-up");
    goUpBtn.style.top = "4rem";
    goUpBtn.style.bottom = "initial";
    const date = new Date(new Date().getTime() + 86400 * 1000);
    document.cookie = "cookieSeen=1; path=/; expires=" + date.toUTCString();
    cookieBtn.closest(".cookies").classList.add("cookies--hide");
  });
};
