
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hi', function () {
  console.log('hi!!');
});


gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
});

gulp.task('serve', function () {
  gulp.watch(['app/sass/**/*.scss'], ['sass']);
})

