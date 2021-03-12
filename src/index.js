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
// import HandleHero from './scripts/modules/HandleHero'
import Obfuscate from "./scripts/modules/Obfuscate";

// import video from './assets/video/hero-video-comp.mp4';

const galleryImages = ['H_8-143_zkzkbh', 'H_8-137_m05swn', 'H_8-134_w8qzqd']

new MobileMenu();

new ShowOnScroll();
new StickyHeader();
new MenuTable();
new ModalBox('.gallery__box', 'data-modal', true, galleryImages);
new Obfuscate(['openside', 'pizza@', 'gmail', '.com'], '.openside-email')
// new HandleHero();