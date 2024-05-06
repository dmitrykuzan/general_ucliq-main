export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll(".fixed-block"),
    body = document.body,
    paddingOffset = `${window.innerWidth - body.offsetWidth}px`;

  fixBlocks.forEach((el) => {
    el.style.marginRight = paddingOffset;
  });

  body.classList.add("lock");

  body.style.paddingRight = paddingOffset;
};
