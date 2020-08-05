window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let slideIndex = 1,
        slides = document.querySelectorAll('.sliderItem'),
        prev = document.querySelector('.Prev'),
        next = document.querySelector('.Next');

    showSlides(slideIndex);

    function showSlides(n) {
        
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'flex';
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
        slides2 = document.querySelectorAll('.oferSlides'),
        prev2 = document.querySelector('.oferBtnPrev'),
        next2 = document.querySelector('.oferBtnNext');

    showSlides2(slideIndex2);

    function showSlides2(n2) {
        
        if (n2 > slides2.length) {
            slideIndex2 = 1;
        }
        if (n2 < 1) {
            slideIndex2 = slides2.length;
        }

        slides2.forEach((item) => item.style.display = 'none');
        slides2[slideIndex2 - 1].style.display = 'block';
    }

    function plusSlides2(n2) {
        showSlides2(slideIndex2 += n2);
    }

    prev2.addEventListener('click', function() {
        plusSlides2(-1);
    });

    next2.addEventListener('click', function() {
        plusSlides2(1);
    
    });
})