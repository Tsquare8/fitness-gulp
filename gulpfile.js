'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var validate = require('gulp-w3c-css');
var path = require('path');
var htmlhint = require("gulp-htmlhint");
var babel = require('gulp-babel');
var beautify = require('gulp-beautify');
var filetree2json = require('gulp-filetree-json-easy');
var uglify = require('gulp-uglify');
// var size = require('gulp-size');
var fileindex = require('gulp-fileindex');

gulp.task('sass', function() {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('validate', function() {
  return gulp.src('./assets/css/*.css')
  .pipe(validate())
  .pipe(gulp.dest('./assets/css/validate/'));
});

gulp.task('htmlhint', function() {
  return gulp.src("index.html")
	.pipe(htmlhint())
  .pipe(gulp.dest('./html_validate'))
  .pipe(htmlhint.failReporter())
});

gulp.task('babel', function() {
	return gulp.src('./assets/js/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'))
});

gulp.task('beautify', function() {
  gulp.src('./assets/js/*.js')
    .pipe(beautify())
    .pipe(gulp.dest('./assets/js/beautify'))
});

gulp.task('filetree2json', function () {
  // Save all images into the json file
  gulp.src('./assets/images/*.{png,jpg,gif,jpeg,svg}')
    .pipe(filetree2json({
        as: 'images.json',
        flat: false
    }))
    .pipe(gulp.dest('app/data/'));
});

gulp.task('uglify', function () {
      return gulp.src('./assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js/uglify'))
});

// gulp.task('size', function () {
//       return gulp.src('./assets/js/*.js')
//         .pipe(size())
//         .pipe(gulp.dest('./assets/js/size'))
// });

gulp.task('fileindex', function() {
  return gulp.src('index.html')
    .pipe(fileindex())
    .pipe(gulp.dest('./fileindex'));
});


gulp.task('default', ['sass', 'validate', 'htmlhint', 'babel', 'beautify', 'filetree2json', 'uglify', 'fileindex']);

gulp.task('css', ['sass', 'validate']);
gulp.task('js', ['babel', 'beautify', 'uglify']);
gulp.task('html', ['htmlhint', 'fileindex']);
