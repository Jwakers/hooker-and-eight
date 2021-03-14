import 'normalize.css';
import '../styles/style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import '@babel/polyfill';
import 'intersection-observer';
import MobileMenu from './modules/MobileMenu';
import ShowOnScroll from './modules/ShowOnScroll';
import StickyHeader from './modules/StickyHeader';
import MenuTable from './modules/MenuTable';
import Obfuscate from "./modules/Obfuscate";

const email = document.querySelector('.openside-email')
new MobileMenu();
new ShowOnScroll();
new StickyHeader();
new MenuTable();
email && new Obfuscate(['openside', 'pizza@', 'gmail', '.com'], '.openside-email');