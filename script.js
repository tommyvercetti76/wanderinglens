// Dummy image data, replace this with actual data later
const images = [
    { src: './images/Cascades.PNG', alt: 'A Crow at Cascades' },
    { src: './images/Sunset_Clouds_Needle.PNG', alt: 'Space Needle at Sunset' },
    { src: './images/Sunset_Clouds.PNG', alt: 'Raining Color' },
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
