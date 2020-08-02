window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let prev = document.querySelector('.Prev'),
        next = document.querySelector('.Next'),
        slides = document.querySelectorAll('.sliderItem'),
        slideIndex = 1;


    showSlides (slideIndex);

    function showSlides(n) {
    
        if (n > slides.length - 3) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        
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

    

    // ofer
    // ofer
    // ofer
    let slideIndex2 = 1,
        slides2 = document.querySelectorAll('.oferContent'),
        prev2 = document.querySelector('.oferBtnPrev'),
        next2 = document.querySelector('.oferBtnNext');

    showSlides2(slideIndex2);

    function showSlides2(n) {
        
        if (n > slides2.length) {
            slideIndex2 = 1;
        }
        if (n < 1) {
            slideIndex2 = slides2.length;
        }

        slides2.forEach((item) => item.style.display = 'none');
        slides2[slideIndex2 - 1].style.display = 'block';
    }

    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }
    function currentSlide2(n) {
        showSlides2(slideIndex2 = n);
    }

    prev2.addEventListener('click', function() {
        plusSlides2(-1);
    });

    next2.addEventListener('click', function() {
        plusSlides2(1);
    
    });
})