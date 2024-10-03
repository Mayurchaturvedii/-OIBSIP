let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');
    updateSlidePosition();
}

function updateSlidePosition() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
