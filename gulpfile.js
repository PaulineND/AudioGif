var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass');

gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});

gulp.task('styles', function(){
	gulp.src('css/*.sass')
	.pipe(sass({
		style:'compressed'
	}))
	.pipe(gulp.dest('css/'));
});

gulp.task('watch', function(){
	gulp.watch('**/*.sass', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);