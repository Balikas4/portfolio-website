
document.addEventListener("DOMContentLoaded", function() {
    // Define the image path (this is just a placeholder)
    const imagePath = '/static/images/shirt.webp';

    // Initialize the canvas
    const canvas = new fabric.Canvas('canvas', {
        width: 500,  // Set canvas width
        height: 600,  // Set canvas height
    });

    // Load the initial image into the canvas
    fabric.Image.fromURL(imagePath, (img) => {
        console.log(`Loaded image: ${imagePath}`); // Log loaded image path

        img.set({
            left: 0,   // Position the image on the canvas
            top: 0,    // Position the image on the canvas
            selectable: false, // Make it non-selectable
            width: img.width, // Set image width
            height: img.height // Set image height
        });

        // Add the image to the canvas
        canvas.add(img);

        // Optional: Center the image if needed
        canvas.centerObject(img);

        // Update image coordinates after centering
        img.setCoords();
    });

    // Handle the image upload and add the image to the canvas
    const imageUploadInput = document.getElementById('imageUpload');
    imageUploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const dataURL = e.target.result;

                // Load the uploaded image into the canvas
                fabric.Image.fromURL(dataURL, (img) => {
                    console.log(`Loaded uploaded image`); // Log the image load

                    img.set({
                        left: 100,   // Position the image on the canvas
                        top: 100,    // Position the image on the canvas
                        selectable: true, // Make it selectable (movable)
                        width: img.width,  // Set image width
                        height: img.height  // Set image height
                    });

                    // Add the uploaded image to the canvas
                    canvas.add(img);

                    // Optional: Center the image if needed
                    canvas.centerObject(img);

                    // Update image coordinates after centering
                    img.setCoords();
                });
            };

            reader.readAsDataURL(file);
        }
    });

    // Handle the download button click to download the canvas as PNG
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
        // Convert the canvas to a PNG image and download it
        const dataURL = canvas.toDataURL({ format: 'png' });

        // Create a temporary link element to trigger the download
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'your_shirt.png'; // Specify the default download file name

        // Programmatically click the link to trigger the download
        link.click();
    });
});
