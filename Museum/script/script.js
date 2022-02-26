'use strict';
// Slider explore
const gallery = document.querySelector('.gallery'),
      slider = document.querySelector('.exp-slider'),
      imgFilter = document.querySelector('.slider-after');

gallery.addEventListener('mousemove', event => {
    let x =-event.screenX;
    console.log(x - 250);
    x = x - 250; // screenX - начальная позиция  = 250; 530 - 280 = 250px;
    let y = x - 720; // object-position: -440px 0 ; "280 - 720 = -440px" 280 - начальное положение слайдера
    if (x > 0 && x < 720) {
        slider.style.right = x - 20 + 'px';
        slider.classList.remove('tr');
        imgFilter.style.width = x + 'px';
        imgFilter.style.objectPosition = y + 'px';
        imgFilter.classList.remove('tr');
    }
});

gallery.addEventListener('mouseleave', () => {
    slider.style.right = 260 + 'px';
    slider.classList.add('tr');
    imgFilter.style.width = 280 + 'px';
    imgFilter.style.objectPosition = -440 + 'px';
    imgFilter.classList.add('tr');
});

// Vodeo player

document.querySelector("#sound").oninput = function() {
    let value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%`;
};

document.querySelector("#progress").oninput = function() {
    let value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%`;
};