let currentSlide = 0;
const slider = document.getElementById('slider');
const currentSlideEl = document.getElementById('currentSlide');
const totalSlidesEl = document.getElementById('totalSlides');
const progressEl = document.getElementById('progress');
const slideCount = 3;


updateSlider();

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * (100 / slideCount)}%)`;
    currentSlideEl.textContent = currentSlide + 1;
    totalSlidesEl.textContent = slideCount;
    
    // Update progress indicator position
    const progressPosition = (currentSlide / (slideCount - 1)) * 80;
    progressEl.style.top = `${progressPosition}%`;
}


setInterval(nextSlide, 5000);