'use strict';

document.addEventListener("DOMContentLoaded", function () {
    /**
     * Navbar Toggle
     */
    const navbar = document.querySelector(".navbar");
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const header = document.querySelector("[data-header]");

    if (!navbar || !navToggleBtn || !header) {
        console.error("One or more elements are missing. Please check your HTML.");
        return; // Exit if required elements are not found
    }

    navToggleBtn.addEventListener("click", function () {
        navbar.classList.toggle("nav-active");
        this.classList.toggle("active");
    });

    // Close navbar on link click
    navbarLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("nav-active");
            navToggleBtn.classList.remove("active");
        });
    });


    /**
     * Back to Top & Header Scroll Effect
     */
    const backTopBtn = document.querySelector("[data-back-to-top]");

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 100) {
            header.classList.add("active");
            if (backTopBtn) { // Check if backTopBtn exists
                backTopBtn.classList.add("active");
            }
        } else {
            header.classList.remove("active");
            if (backTopBtn) { // Check if backTopBtn exists
                backTopBtn.classList.remove("active");
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery-main');
    const bubblesContainer = document.querySelector('.navigation');
    const galleryItems = document.querySelectorAll('.gallery-item');
    let itemsPerView = window.innerWidth <= 600 ? 1 : 2; // 1 on mobile, 2 on larger screens
    let totalSlides = Math.ceil(galleryItems.length / itemsPerView);
    let currentIndex = 0;
    let autoSlideInterval;
    let startX = 0;
    let endX = 0;

    // Function to update gallery layout and bubbles
    function updateGalleryLayout() {
        itemsPerView = window.innerWidth <= 600 ? 1 : 2;
        totalSlides = Math.ceil(galleryItems.length / itemsPerView);
        gallery.style.width = `${totalSlides * 100}%`;

        galleryItems.forEach(item => {
            item.style.width = `${100 / itemsPerView}%`;
        });

        bubblesContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const bubble = document.createElement('span');
            bubble.classList.add('bubble');
            if (i === 0) bubble.classList.add('active');
            bubble.setAttribute('data-index', i);
            bubblesContainer.appendChild(bubble);
        }

        attachBubbleEvents();
    }

    function updateGallery() {
        gallery.style.transform = `translateX(-${(currentIndex * 100) / totalSlides}%)`;
        document.querySelectorAll('.bubble').forEach(bubble => bubble.classList.remove('active'));
        document.querySelector(`.bubble[data-index="${currentIndex}"]`).classList.add('active');
    }

    function attachBubbleEvents() {
        document.querySelectorAll('.bubble').forEach((bubble, index) => {
            bubble.addEventListener('click', () => {
                currentIndex = index;
                updateGallery();
                resetAutoSlide();
            });
        });
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateGallery();
    }

    function goToPreviousSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateGallery();
    }

    // Swipe detection
    gallery.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    gallery.addEventListener('touchmove', e => endX = e.touches[0].clientX);
    gallery.addEventListener('touchend', () => {
        if (endX - startX > 50) goToPreviousSlide();
        else if (endX - startX < -50) goToNextSlide();
        resetAutoSlide();
    });

    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(goToNextSlide, 9000);
    }
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Initialize gallery
    updateGalleryLayout();
    window.addEventListener('resize', updateGalleryLayout);
    updateGallery();
    startAutoSlide();

    gallery.addEventListener('mouseover', stopAutoSlide);
    gallery.addEventListener('mouseleave', startAutoSlide);
});

