var gulp = require('gulp'),
    connect = require('gulp-connect'),
    proxy = require('proxy-middleware'),
    url = require('url'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass');

gulp.task('jshint', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('build-css', function() {
    return gulp.src('app/assets/css/sass-socsystem-style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/assets/css'));
});

gulp.task('serve-dev', ['local-server-dev', 'watch-dev']);

function createProxy() {
    var url = require('url');
    var proxy = require('proxy-middleware');

    var options;
    options = url.parse('http://localhost:3000/api/');
    options.route = '/api/';
    var apiProxy = proxy(options);

    return [apiProxy];
}

gulp.task('local-server-dev', ['build-css'], function() {
    return connect.server({
        root: ['app'],
        port: 9000,
        livereload: true,
        middleware: createProxy
    });
});

gulp.task('watch-dev', ['local-server-dev'], function() {
    return gulp.watch(['app/**/*.*', '*.html'], { interval: 500 }, ['build-css', 'reload']);
});

gulp.task('reload', function() {
    return gulp.src('app')
        .pipe(connect.reload());
});
