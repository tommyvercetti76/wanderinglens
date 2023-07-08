// Import Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const imageGrid = document.getElementById('image-grid');
const imageOverlay = document.getElementById('image-overlay');
const overlayImage = document.getElementById('overlay-image');
const closeBtn = document.getElementById('close-btn');

// Get a reference to the Firestore database
const db = firebase.firestore();

// Query the collection "images"
db.collection('images').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        const image = doc.data();
        
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        imageItem.appendChild(img);
        imageGrid.appendChild(imageItem);

        imageItem.onclick = () => {
            overlayImage.src = image.src;
            overlayImage.alt = image.alt;
            imageOverlay.classList.remove('hidden');
        };
    });
});

closeBtn.onclick = () => {
    imageOverlay.classList.add('hidden');
};
