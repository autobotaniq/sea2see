/* jshint node:true */

'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const stripCssComments = require('gulp-strip-css-comments');

gulp.task('server', function () {

  browserSync({
    server: {
      baseDir: "./"
    }
  });

});


gulp.task('scss', (done) => {
  gulp.src(['./scss/main.scss']).pipe(sass({
    outputStyle: 'compressed',
  }).on('error', sass.logError))
    .pipe(stripCssComments())
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
  done();
});

gulp.task('scripts', (done) => {
  gulp.src(['./js/src/*.js',])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
  done();
});

gulp.task('watch', function () {
  gulp.watch("./scss/**/*.scss", gulp.parallel('scss'));
  gulp.watch("./js/src/*.js", gulp.parallel('scripts'));
  gulp.watch("./*.html").on('change', browserSync.reload);

});

gulp.task('default', gulp.parallel('watch', 'server', 'scss', 'scripts'));