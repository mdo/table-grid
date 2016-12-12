var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    browserSync({
        proxy: "localhost:8888/table-grid/layouts/update.html"
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});


gulp.task('styles', function () {
    gulp.src(['sass/**/*.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('default', ['browser-sync'], function () {
    gulp.watch("sass/**/*.scss", ['styles']);
    gulp.watch("layouts/**/*.html", ['bs-reload']);
});