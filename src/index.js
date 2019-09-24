import 'normalize.css';
import './styles/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '@babel/polyfill';
import 'intersection-observer';
import MobileMenu from './scripts/modules/MobileMenu';
import Map from './scripts/modules/Maps';
import ShowOnScroll from './scripts/modules/ShowOnScroll';
import StickyHeader from './scripts/modules/StickyHeader';
import MenuTable from './scripts/modules/MenuTable';
import ModalBox from './scripts/modules/ModalBox';

new MobileMenu();

const mapElement = document.querySelector('.google-map');

Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });


new ShowOnScroll();
new StickyHeader();
new MenuTable();
new ModalBox('.gallery__box', 'data-modal');