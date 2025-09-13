const scroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true
});

window.addEventListener("load", () => {
    scroll.update();
    menuAnimation();
});

let elemCont = document.querySelector(".element");
let fxdImg = document.querySelector(".fixed-img");


elemCont.addEventListener("mouseenter", function () {
    fxdImg.style.display = "block"
})
elemCont.addEventListener("mouseleave", function () {
    fxdImg.style.display = "none"
})
let elemS = document.querySelectorAll(".elem")
elemS.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        let img = e.getAttribute("data-img")
        fxdImg.style.backgroundImage = `url(${img})`
    })
})


fxdImg.addEventListener("mouseenter", function () {
    fxdImg.style.display = "block"
})
fxdImg.addEventListener("mouseleave", function () {
    fxdImg.style.display = "none"
})
fxdImg.addEventListener("mouseenter", () => {
    elemS.forEach((e) => {
        let img = e.getAttribute("data-img")
        fxdImg.style.backgroundImage = `url(${img})`
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 50,
});

function menuAnimation() {
    var menu = document.querySelector(".menu")
    var full = document.querySelector(".full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }        
    })
}





