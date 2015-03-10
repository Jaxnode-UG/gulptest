var gulp = require('gulp'),
	gulputil = require('gulp-util'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect');

gulp.task('scripts', function () {
	gulp.src('js/lib/*.js')
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js/min'));
});

gulp.task('default', ['scripts']);

gulp.task('connect', function() {
	connect.server({
		port: 8080
	});
});