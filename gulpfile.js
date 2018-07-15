var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('stylesheets/main.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('assets/css'))
});


gulp.task('watch', ['sass'], function() {
    gulp.watch(['./**/*.scss', './**/*.sass'], ['sass'])
});

gulp.task('default', ['watch']);