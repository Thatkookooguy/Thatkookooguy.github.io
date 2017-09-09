var gulp = require('gulp');
var responsive = require('gulp-responsive');

gulp.task('default', function () {
  return gulp.src('assets/*.{png,jpg}')
    .pipe(responsive({
      '*.jpg': {
        width: 500
      },
      '*.png': {
        width: 500
      }
    }))
    .pipe(gulp.dest('dist'));
});
