var imagemin = require("imagemin"),    // The imagemin module.
    _ = require('lodash'),
    webp = require("imagemin-webp"),   // imagemin's WebP plugin.
    glob = require('glob'),
    sharp = require('sharp'),  // resize images (only downscale)
    outputFolder = "./src/assets/images",            // Output folder
    PNGImages = "./src/assets/images/*.png",         // PNG images
    JPEGImages = "./src/assets/images/*.jpg";        // JPEG images

var allAssets = glob.sync('./src/assets/images/fullsize/*.{png,jpg,jpeg,webp}', {
  nodir: true
});

var allPromises = [];

_.forEach(allAssets, function(path) {
  allPromises.push(
    sharp(path)
      .resize(350)
      .withoutEnlargement()
      .toFile(path.replace('fullsize/', '')));
});

Promise.all(allPromises)
  .then(function() {
    console.log('finished resizing... starting conversion');

    imagemin([PNGImages], outputFolder, {
        plugins: [webp({
            lossless: true // Losslessly encode images
        })]
    });

    imagemin([JPEGImages], outputFolder, {
        plugins: [webp({
            quality: 65 // Quality setting from 0 to 100
        })]
    });

  }).catch(function(err) {
    console.error('problem resizing', err);
  });
