const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const livereload = require('gulp-livereload');

gulp.task('minify-css', () =>{
    return gulp.src('./src/*.css')
        .pipe(cleancss({compatibility: '*'}))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload({
            start: true,
            port: '3333',
            host: 'localhost'
        }))
});

