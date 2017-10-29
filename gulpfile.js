var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");

gulp.task("sass", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("css/"));
});

gulp.task("default", function() {
  gulp.watch("sass/*.scss", ["sass"]);
});
