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
import Gallery from './modules/Gallery';
import Obfuscate from "./modules/Obfuscate";

const galleryImages = [
    'happy-patrons-at hooker-and-eight',
    'dan-prepping-pizza',
    'sprinkling-cheese',
    'steve-on-the-pizza-peel',
    'pizza-ready-for-the-oven',
    'pizza-on-pizza-peel',
    'two-takeaway-pizzas',
    'calzone-on-plate',
    'meaty-pizza',
    'pizza-transferring-to-plate',
    'steve-prepping-calzone',
    'adam-enjoying-cleaning',
    'happy-dan',
    'fully-loaded-calzone-ready-to-fold',
    'hooker-and-eight-front-window',
    'hooker-and-eight-front-at-night',
    'prepping-mushroom-pizza',
    'pizza-wheel-cutting',
    'finishing-with-balsamic-glaze',
    'hooker-and-eight-owners-and-staff',
    'this-is-normal',
    'hooker-and-eight-mirror',
    'steve-weighing-dough',
    'rugby-shirt-decoration',
    'dan-getting-started-on-a-pizza',
    'dan-showcasing-handmade-doughs',
    'shaping-the-dough',
    'vegetable-ingredients',
    'hooker-and-eight-restaurant-interior',
]
const email = document.querySelector('.openside-email')
const gallery = document.querySelector('.gallery')
new MobileMenu();
new ShowOnScroll();
new StickyHeader();
new MenuTable();
gallery && new Gallery(galleryImages);
email && new Obfuscate(['openside', 'pizza@', 'gmail', '.com'], '.openside-email');