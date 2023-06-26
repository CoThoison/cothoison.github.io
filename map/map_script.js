const menuHamburger = document.querySelector(".menuHamburger");
const navLinks = document.querySelector("nav .menu");
const divMap = document.querySelector("#map");
 
menuHamburger.addEventListener('click',()=>{
	navLinks.classList.toggle('menuOpen');
})

divMap.addEventListener('click',()=>{
  if(navLinks.classList.contains("menuOpen")){
    navLinks.classList.remove("menuOpen");
  }
});

const map = L.map('map', { maxZoom: 18 }).setView([46.603354, 1.888334], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const world = document.querySelector("#World");
const france = document.querySelector("#France");
const japan = document.querySelector("#Japan");


world.addEventListener('click',()=>{
  map.setView([30, 30], 2.3);
});

france.addEventListener('click',()=>{
  map.setView([46.603354, 1.888334], 6);
});

japan.addEventListener('click',()=>{
  map.setView([37.204824, 138.252924], 5);
});

const markerCluster = L.markerClusterGroup();

fetch('images.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(function (location) {
      let latitude = location.latitude;
      let longitude = location.longitude;
      let imageLink = location.imageLink;
      let ratio = location.ratio;

      let height = 0;
      let width = 0;

      if (ratio >= 1) {
        width = 225;
        height = width / ratio;
      } else {
        height = 225;
        width = height * ratio;
      }

      let marker = L.marker([latitude, longitude]);
      let popupContent = '<img class="clickable-image" src="' + imageLink + '" alt="Image" style="height: ' + height + 'px; width: ' + width + 'px;">';

      marker.bindPopup(popupContent);

      markerCluster.addLayer(marker);

      marker.on('click', function () {
        marker.unbindPopup(); // Détachez la popup du marqueur

        let imageElement = document.createElement('img');
        imageElement.src = imageLink;
        imageElement.alt = 'Image';
        imageElement.style.height = height + 'px';
        imageElement.style.width = width + 'px';
        imageElement.className = 'clickable-image';

        // Ajoutez un gestionnaire d'événements pour afficher l'image en grand
        imageElement.addEventListener('click', function () {
          document.getElementById('modalImage').src = imageLink;
          document.getElementById('imageModal').style.display = 'block';
        });

        marker.bindPopup(imageElement).openPopup(); // Attachez la nouvelle popup au marqueur
      });

      // Fermez la boîte modale lorsque l'utilisateur clique sur le bouton de fermeture
      document.getElementsByClassName('close')[0].addEventListener('click', function () {
        document.getElementById('imageModal').style.display = 'none';
      });

    });

    map.addLayer(markerCluster);
  })
  .catch(error => {
    console.error('Error:', error);
  });
