let currentIndex = 0;

const captions = ["Test Data Management (TDM)", "Data Touch", "Data Focus"];

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const caption = document.querySelector('.slider-caption');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;

    caption.textContent = captions[currentIndex];
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.slider-caption').textContent = captions[0];
});
