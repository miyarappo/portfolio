var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var cleancss = require('gulp-clean-css');
var uglify = require('gulp-uglify');


gulp.task("sass", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("css/"));
});

gulp.task('minify-js', function() {
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/'));
});

gulp.task('minify-css', function() {
  gulp.src('css/*.css')
    .pipe(cleancss())
    .pipe(gulp.dest('css/'));
});


gulp.task("default", function() {
  gulp.watch("sass/*.scss", ["sass"]);
});
