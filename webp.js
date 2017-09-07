var imagemin = require("imagemin"),    // The imagemin module.
    webp = require("imagemin-webp"),   // imagemin's WebP plugin.
    outputFolder = "./assets",            // Output folder
    PNGImages = "./assets/*.png",         // PNG images
    JPEGImages = "./assets/*.jpg";        // JPEG images
    SVGImages = "./assets/*.svg";         // SVG images

imagemin([PNGImages], outputFolder, {
    plugins: [webp({
        lossless: true // Losslessly encode images
    })]
});

imagemin([SVGImages], outputFolder, {
    plugins: [webp({
        lossless: true // Losslessly encode images
    })]
});

imagemin([JPEGImages], outputFolder, {
    plugins: [webp({
        quality: 65 // Quality setting from 0 to 100
    })]
});
