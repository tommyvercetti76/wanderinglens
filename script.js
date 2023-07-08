// Dummy image data, replace this with actual data later
const images = [
    { src: 'img1.jpg', alt: 'Image 1' },
    { src: 'img2.jpg', alt: 'Image 2' },
    // More images here...
];

const imageGrid = document.getElementById('image-grid');

images.forEach(image => {
    const imageItem = document.createElement('div');
    imageItem.className = 'image-item';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;

    imageItem.appendChild(img);
    imageGrid.appendChild(imageItem);
});
