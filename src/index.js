import 'normalize.css';
import './styles/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import MobileMenu from './scripts/modules/MobileMenu';
import Map from './scripts/modules/Maps';
import ShowOnScroll from './scripts/modules/showOnScroll';
import StickyHeader from './scripts/modules/StickyHeader';

new MobileMenu();

const mapElement = document.querySelector('.google-map');

Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });


new ShowOnScroll();
new StickyHeader();