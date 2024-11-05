document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "/static/images/example2/student1.svg",
        "/static/images/example2/student2.svg",
        "/static/images/example2/student5.svg",
        "/static/images/example2/student4.svg",
        "/static/images/example2/student6.svg"
    ];

    let currentImageIndex = 0;
    const dancerImg = document.querySelector(".hero-img");

    function changeImage() {
        // Fade out
        dancerImg.classList.add("fade-out");

        // After the fade-out transition, change the image
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            dancerImg.src = images[currentImageIndex];

            // Remove fade-out and add fade-in
            dancerImg.classList.remove("fade-out");
        }, 200); // Match this to CSS transition duration
    }

    setInterval(changeImage, 2000); // Change image every 2 seconds
});
