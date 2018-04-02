var gulp = require('gulp');
var del = require('del');
var svgSprite = require('gulp-svg-sprite');


// Basic configuration example
var config = {
	mode: {
		symbol: true // Activate the «symbol» mode
	}
};

gulp.task('sprites', function () {
	return gulp.src('src/svg/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('public/svg'))
});

gulp.task('clean', function () {
	return del('public/svg');
});

gulp.task('default', gulp.series('clean', 'sprites'));