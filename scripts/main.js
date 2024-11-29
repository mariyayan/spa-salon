import { setBurger } from './menu.js';
import { setChooseCategory } from './shop.js';
import { setFAQ } from './faq.js';
import { setPreLoader } from './preloader.js';
import { setSlider } from './slider.js';
import { showCloseViewer } from './viewer.js';
import { showHiddenImgs } from './imgs.js';

try {
    setPreLoader();
} catch (e) {
    console.log(e);
}
try {
    showHiddenImgs();
} catch (e) {
    console.log(e);
}
try {
    setBurger();
} catch (e) {
    console.log(e);
}

try {
    setSlider();
} catch (e) {
    console.log(e);
}

try {
    showCloseViewer(document.querySelector('#products'));
} catch (e) {
    console.log(e);
}
try {
    showCloseViewer(document.querySelector('#shop-container'));
} catch (e) {
    console.log(e);
}
try {
    showCloseViewer(document.querySelector('#treatments-container'));
} catch (e) {
    console.log(e);
}
try {
    setChooseCategory();
} catch (e) {
    console.log(e);
}

try {
    setFAQ();
} catch (e) {
    console.log(e);
}