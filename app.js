const randomImageButton = document.getElementById('new-image-btn');
const randomImageElement = document.getElementById('random-image');

// Function to fetch a random image
async function fetchRandomImage() {
    try {
        const response = await fetch('https://source.unsplash.com/random');
        if (!response.ok) {
            throw new Error('Failed to fetch image');
        }
        const imageUrl = response.url;
        randomImageElement.src = imageUrl;
    } catch (error) {
        console.error('Error fetching random image:', error);
        alert('Failed to fetch random image. Please try again.');
    }
}

// Event listener for the "New Image" button
randomImageButton.addEventListener('click', fetchRandomImage);

// Fetch a random image when the page loads
fetchRandomImage();
