import 'normalize.css';
import './styles/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '@babel/polyfill';
import 'intersection-observer';
import MobileMenu from './scripts/modules/MobileMenu';
import ShowOnScroll from './scripts/modules/ShowOnScroll';
import StickyHeader from './scripts/modules/StickyHeader';
import MenuTable from './scripts/modules/MenuTable';
import ModalBox from './scripts/modules/ModalBox';

import video from './assets/video/pizza.mp4';

new MobileMenu();

new ShowOnScroll();
new StickyHeader();
new MenuTable();
new ModalBox('.gallery__box', 'data-modal');