const images = ['Images/Gimbaal.png', 'Images/Pnumatic Engine.png', 'Images/RackPinioin Base.png', 'Images/Screenshot 2024-05-22 195525.png']; // Add more images as needed
let currentIndex = 0;
const redirectUrl = 'https://example.com'; // The URL to redirect to when any image is clicked

function changeImage() {
    const imageElement = document.getElementById('Mechanical design');
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById('Mechanical design');

    // Add click event listener to the image
    imageElement.addEventListener('click', function() {
        window.location.href = redirectUrl; // Redirect to the specified URL
    });
    
    // Start the image rotation
    setInterval(changeImage, 3000); // Change image every 3 seconds
});



