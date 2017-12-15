var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss');



  gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
      .pipe()
      .pipe(gulp.dest('./app/temp/styles'));
  });

gulp.task('watch', function() {

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
