var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  prefix = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  plumber = require('gulp-plumber'),
  bower = require('gulp-bower');

gulp.task('css', function() {
  gulp.src('./styles/**.*css')
    .pipe(sass({
      errLogToConsole: false
    }))
    .pipe(rename('eqdkp_indecisive.css'))
    .pipe(gulp.dest('..'))
});

gulp.task('scripts', function() {
  return gulp.src('./scripts/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('eqdkp_indecisive.js'))
    .pipe(uglify())
    .pipe(gulp.dest('..'))
});

gulp.task('watch', function() {
  gulp.watch('./styles/*/**', ['css']);
  gulp.watch('./scripts/*.js', ['scripts']);
});

gulp.task('default', ['css', 'scripts', 'watch'], function() {});
