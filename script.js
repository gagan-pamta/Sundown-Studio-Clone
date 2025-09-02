const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});

window.addEventListener("load", () => {
  scroll.update();
});
