var gulp = require('gulp'),
    del = require('del'),
    connect = require('gulp-connect'),
    proxy = require('proxy-middleware'),
    url = require('url'),
    useref = require('gulp-useref'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    svgmin = require('gulp-svgmin'),
    replace = require('gulp-replace'),
    htmlmin = require('gulp-htmlmin'),
    gutil = require('gulp-util');

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('cache:clear', function (callback) {
    return cache.clearAll(callback)
})

gulp.task('minify-assets', ['minify-shapes', 'minify-img']);

gulp.task('build', ['useref', 'copy-themes', 'copy-fonts', 'copy-i18n', 'copy-shapes', 'copy-img', 'minify-html']);

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

gulp.task('useref', ['jshint', 'build-css'], function() {
    return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', replace('$$REVISION$$', new Date().getTime())))
        .pipe(gulpIf('*.js', uglify().on('error', gutil.log)))
        .pipe(gulpIf('*.css', cssnano({ discardUnused : false })))
        .pipe(gulpIf('*.js', rev()))
        .pipe(gulpIf('*.css', rev()))
        .pipe(revReplace())
        .pipe(gulp.dest('dist'))
});

gulp.task('copy-themes', function() {
    var semanticTheme = ['app/bower_components/semantic/dist/themes/*/**'];
    return gulp.src(semanticTheme)
        .pipe(gulp.dest('dist/assets/css/themes'));
});

gulp.task('copy-fonts', function() {
    return gulp.src('app/assets/fonts/**/*.{ttf,otf,woff,woff2,eof,svg}')
        .pipe(gulp.dest('dist/assets/fonts'));
});

gulp.task('copy-i18n', function() {
    return gulp.src('app/assets/i18n/*.json')
        .pipe(gulp.dest('dist/assets/i18n'));
});

gulp.task('copy-shapes', function() {
    return gulp.src('app/assets/shapes/**/*.svg')
        .pipe(gulp.dest('dist/assets/shapes'));
});

gulp.task('copy-img', function() {
    return gulp.src('app/assets/img/**/*.+(png|jpg|gif|svg)')
        .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('minify-shapes', ['copy-shapes'], function() {
    return gulp.src('app/assets/shapes/icons/**/*.svg')
        .pipe(imagemin())
        .pipe(svgmin({
            plugins: [
                {
                    removeAttrs: {
                        attrs: ['id', 'class']
                    }
                }
            ]
        }))
        .pipe(replace('z"/><path d="M', 'z M'))
        .pipe(gulp.dest('app/assets/shapes/icons'));
});

gulp.task('minify-img', function() {
    return gulp.src('app/assets/img/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('app/assets/img'));
});

gulp.task('minify-html', function() {
    gulp.src('index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
        
    return gulp.src('app/views/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/views'))
});

gulp.task('serve-dev', ['local-server-dev', 'watch-dev']);

gulp.task('serve-dist', ['local-server-dist']);

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

gulp.task('local-server-dist', function() {
    return connect.server({
        root: ['dist'],
        port: 9000,
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
