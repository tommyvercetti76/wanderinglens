// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCW-5TKSZPo7Q-TeT9IRHWhSb8aJI4v7DM",
    authDomain: "wanderinglens-67683.firebaseapp.com",
    projectId: "wanderinglens-67683",
    storageBucket: "wanderinglens-67683.appspot.com",
    messagingSenderId: "402800542305",
    appId: "1:402800542305:web:34cdfe41eaa65b2e326020"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the Firestore database
  const db = firebase.firestore(app);
  
  // Get a reference to the Storage service
  const storage = firebase.storage(app);
  
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
  