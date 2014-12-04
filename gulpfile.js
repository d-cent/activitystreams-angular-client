var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

/*
*	Default task does the following:
*	- Copies files to ./bin folder
*	- Concats and minifies scripts
*	- Cleans original scripts
*
*	Dependencies: clean-scripts -> compress -> annotate -> copy
*/
gulp.task('default', ['clean-scripts']);

gulp.task('copy', function(){
	return gulp.src('src/**/*.*')
  		.pipe(gulp.dest('bin'));
});

gulp.task('annotate', ['copy'], function () {
	return gulp.src('bin/**/*.js')
		.pipe(ngAnnotate())
		.pipe(gulp.dest('bin'));
});

gulp.task('compress', ['annotate'], function() {
	//concat module files first so that they are available later
	//concat other js files then (concat shouldnt include same file twice)
	var files = [
		'bin/app/app.module.js',
		'bin/app/**/*.module.js',
		'bin/app/**/*.js'
	]

	return gulp.src(files)
		.pipe(concat('app.min.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('bin/app'))
});

gulp.task('clean-scripts', ['compress'], function () {
	var files = [
		'bin/app/**/*.js',
		'!bin/app/app.min.js',
	]

	return gulp.src(files, {read: false})
    	.pipe(clean());
});

/*
*	If dcent-patterns project is cloned to another folder and updated, these can be used to update
*	the css to use in mockups
*/

gulp.task('updatecss', function() {
	return gulp.src('../dcent-patterns/source/assets/css/main.css')
		.pipe(gulp.dest('src/assets/css/'));
});

gulp.task('updateimg', function(){
	return gulp.src('../dcent-patterns/source/assets/img/*')
		.pipe(gulp.dest('src/assets/img/'));
});