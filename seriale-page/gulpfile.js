var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');

gulp.task('default', function() {

    var scssStream = gulp.src(['assets/sass/*.scss'])
        .pipe(sass())
        .pipe(concat('scss-files.scss'));
    
    // var cssStream = gulp.src([...])
    //     .pipe(concat('css-files.css'));

    var mergedStream = merge(scssStream)
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(gulp.dest('web/css'));

    return mergedStream;
});