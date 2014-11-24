var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function () {
	return gulp.src('src/app/app.js')
		.pipe(ngAnnotate())
		.pipe(gulp.dest('src/app/dist/'));
});

gulp.task('updatecss', function() {
	return gulp.src('../dcent-patterns/source/assets/css/main.css')
		.pipe(gulp.dest('src/assets/css/'));
});

gulp.task('updateimg', function(){
	return gulp.src('../dcent-patterns/source/assets/img/*')
		.pipe(gulp.dest('src/assets/img/'));
});