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
