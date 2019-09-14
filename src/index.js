import 'normalize.css';
import './styles/style.scss';
// import './assets/images/logo.svg';

import MobileMenu from './scripts/modules/MobileMenu';
import Map from './scripts/modules/Maps';

new MobileMenu();

const mapElement = document.querySelector('.google-map');

Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  })