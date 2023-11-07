import Navigation from "./navigation";
import imagesLoaded from '/node_modules/imagesloaded/imagesloaded.js';


import WebFont from '/node_modules/webfontloader/webfontloader.js';

// Preload images
const preloadImages = () => {
    return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll('.screen'), { background: true }, resolve);
    });
};

// Preload fonts
const preloadFonts = () => {
    return new Promise((resolve, reject) => {
        WebFont.load({
            typekit: {
                id: 'cze1cgq'
            },
            active: resolve
        });
    });
};

// Preload fonts and images
Promise.all([preloadImages(), preloadFonts()]).then(() => {
    new Navigation(document.querySelector('.menu'));
    // Remove loader (loading class)
    document.body.classList.remove('loading');
});