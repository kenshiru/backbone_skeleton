var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function () {
    gulp.src([
        'js/Modules/*/Module.js',
        'js/Modules/*/Router.js',
        'js/Modules/*/Controllers/**/*.controller.js',
        'js/Modules/*/Views/**/*.view.js'
    ])
        .pipe(concat('application.js'))
        .pipe(gulp.dest('./'));
});

