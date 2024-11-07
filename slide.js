const slider = document.querySelector(".hero-list")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

const totalSlider = document.querySelectorAll(".hero-list > div").length

let index = 0;

function nextSlider() {
    index = (index + 1)% totalSlider
    slider.style.transform = `translateX(-${index * 100}vw)`
}

function prevSlider(){
    index = ((index - 1) + totalSlider)% totalSlider
    slider.style.transform = `translateX(-${index * 100}vw)`
}

nextBtn.addEventListener('click', nextSlider)
prevBtn.addEventListener('click', prevSlider)