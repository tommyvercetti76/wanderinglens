// Get a reference to the Firestore database
var db = firebase.firestore();

// Get a reference to the Storage service
var storage = firebase.storage();

var imageGrid = document.getElementById('image-grid');
var imageOverlay = document.getElementById('image-overlay');
var overlayImage = document.getElementById('overlay-image');
var closeBtn = document.getElementById('close-btn');

db.collection('images').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var image = doc.data();
        
        var imageItem = document.createElement('div');
        imageItem.className = 'image-item';

        var img = document.createElement('img');
        img.alt = image.path; // assuming 'path' is the field name in Firestore

        storage.ref(image.path).getDownloadURL().then(function(url) {
            img.src = url;
        });

        imageItem.appendChild(img);
        imageGrid.appendChild(imageItem);

        imageItem.onclick = function() {
            overlayImage.src = img.src;
            overlayImage.alt = img.alt;
            imageOverlay.classList.remove('hidden');
        };
    });
});

closeBtn.onclick = function() {
    imageOverlay.classList.add('hidden');
};
