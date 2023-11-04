const imagesLoaded = require('imagesloaded');
import Navigation from "./navigation";

const port = process.env.PORT || 3888; // Use the provided port or 3888 for local development
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Preload images

const preloadImages = () => {
    return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll('.screen'), {background: true}, resolve);
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