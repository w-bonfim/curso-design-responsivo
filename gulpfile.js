var gulp  = require('gulp');
var sass  = require('gulp-ruby-sass');
var watch = require('gulp-watch');

// task para sass
gulp.task('sass', function(){
	return sass('sass/*.sass').pipe(gulp.dest('css'))
});

// task para watch [para não ficar digitando toda hora o comando gulp sass para compilar o sass]
gulp.task('watch', function(){
	gulp.watch('sass/*.sass', ['sass']);
});

// task default gulp
gulp.task('default', ['sass', 'watch']); // compilar os talks com o comando só 'gulp'