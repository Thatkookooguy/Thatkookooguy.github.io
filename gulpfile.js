var gulp = require('gulp');
//var responsive = require('gulp-responsive');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');
var htmlmin = require('gulp-htmlmin');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');
var glob = require('glob');
var _ = require('lodash');

// gulp.task('default', function () {
//   return gulp.src('assets/*.{png,jpg}')
//     .pipe(responsive({
//       '*.jpg': {
//         width: 500
//       },
//       '*.png': {
//         width: 500
//       }
//     }))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('assets', function() {
  return gulp.src('./src/assets/**/*', {
      base: './src/assets'
    })
    .pipe(gulp.dest('./assets'));
});

gulp.task('sass', function() {
  return gulp.src('./src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('sw', function() {
  return gulp.src('src/sw.js')
    .pipe(data(function() {
      return {
        'toBeCached': getAllCachedFiles()
      }
    }))
    .pipe(nunjucksRender({ ext: '.js', }))
    .pipe(gulp.dest(''));
});

gulp.task('default', ['sw', 'assets', 'sass'], function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('src/pages/**/*.+(html|nunjucks)')
    // Adding data to Nunjucks
    .pipe(data(function() {
      return require('./src/data.json')
    }))
    // Renders template with nunjucks
    .pipe(nunjucksRender({
      path: ['src/templates']
    }))
    // combine dependencies
    .pipe(useref({
      searchPath: 'src'
    }))
    // uglify JS
    .pipe(gulpif('*.js', uglify()))
    // minify CSS
    .pipe(gulpif('*.css', minifyCss()))
    // minify HTML
    //.pipe(htmlmin({collapseWhitespace: true}))
    // output files in app folder
    .pipe(gulp.dest(''));
});

function getAllCachedFiles() {
  var allAssets = glob.sync('./src/assets/**/*', {
    ignore: './src/assets/**/*.mp3',
    nodir: true
  });

  allAssets = _.map(allAssets, function(asset)  {
    return _.replace(asset, './src', '');
  });

  return allAssets.concat([
    '/',
    '/index.html',
    '/index.html?homescreen=1',
    '/?homescreen=1',
    '/css/combined.css',
    '/scripts/combined.js'
  ]);
}
