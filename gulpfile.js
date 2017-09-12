var gulp = require('gulp');
//var responsive = require('gulp-responsive');
var nunjucksRender = require("gulp-nunjucks-render");
var data = require('gulp-data');
var htmlmin = require('gulp-htmlmin');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');

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

gulp.task('assets', function () {
  return gulp.src('./src/assets/**/*', { base: './src/assets' })
    .pipe(gulp.dest('./assets'));
});

gulp.task('sass', function () {
  return gulp.src('./src/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('default', ['assets', 'sass'], function() {
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
  .pipe(useref({ searchPath: 'src' }))
  // uglify JS
  .pipe(gulpif('*.js', uglify()))
  // minify CSS
  .pipe(gulpif('*.css', minifyCss()))
  // minify HTML
  //.pipe(htmlmin({collapseWhitespace: true}))
  // output files in app folder
  .pipe(gulp.dest(''));
});
