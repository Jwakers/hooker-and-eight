// import GoogleMapsLoader from 'google-maps';

// GoogleMapsLoader.KEY = 'AIzaSyBsUs4VaD1e30XZx4cLfaGqvR6nwRwH7NI';
// const Map = new google.maps.Map(document.querySelector('.google-map'), {
//     center: { lat: 51.866298, lng: -2.247686 },
//     zoom: 8
// });

const loadGoogleMapsApi = require('load-google-maps-api');
class Map {
  
  static loadGoogleMapsApi() {
    return loadGoogleMapsApi({ key: 'AIzaSyBsUs4VaD1e30XZx4cLfaGqvR6nwRwH7NI' });
  }
  static createMap(googleMaps, mapElement) {
    return new googleMaps.Map(mapElement, {
      center: { lat: 51.866298, lng: -2.247686 },
      zoom: 14
    });
  }
}

export default Map;