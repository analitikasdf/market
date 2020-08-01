window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        slides = document.querySelectorAll('.slider-item'),
        slideIndex = 1;


    showSlides (slideIndex);

    function showSlides(n) {
    
        if (n > slides.length - 3) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        console.log(n);
        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'flex';
        slides[slideIndex].style.display = 'flex';
        slides[slideIndex + 1].style.display = 'flex';
        slides[slideIndex + 2].style.display = 'flex';
    }
    

    function plusSlides(n) {
        showSlides(slideIndex += n);

    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    
 
})