var gulp = require('gulp'),
    watch = require('gulp-watch'),
    htmlreplace = require('gulp-html-replace'),
    del = require('del'),
    shell = require('gulp-shell'),
    tar = require('gulp-tar'),
    gzip = require('gulp-gzip'),
    deploySlug = require('gulp-heroku-deploy-slug');

var foldersToCopy = [
    'package.json',
    'procfile',
    './common/**',
    './client/bin/**',
    './client/templates/**'
];

gulp.task('clean', function (cb) {
    del('./dist/**', cb);
});


gulp.task('deploy-server', function() {
    gulp.src('./server/**')
    .pipe(gulp.dest('./dist/server/'))
})

gulp.task('deploy-folders', function() {
    gulp.src(foldersToCopy, {base: './' })
    .pipe(gulp.dest('./dist/'))
});

gulp.task('deploy-client-modules', shell.task([
    'jspm bundle-sfx --minify lib/main ./dist/client/app.js;'
]));


gulp.task('tar', function () {
    return gulp.src('dist/*')
    .pipe(tar('archive.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('tar'));
});

gulp.task('deploy-tar-heroku', function () {
    return gulp.src('./tar/archive.tar.gz') // Or get it some other way 
    .pipe(deploySlug({
        app: 'shiny-shiny-shiny',
        slug: {
            process_types: {
                //web: 'node-v0.10.20-linux-x64/bin/node slc run'
                web: 'slc run'
            }
        }
    }));
});


gulp.task('deploy-web', ['deploy-folders', 'deploy-client-modules'], function() {
    gulp.src('./client/index.html')
    .pipe(htmlreplace({js: ['bin/traceur-runtime.js', 'app.js']}))
    .pipe(gulp.dest('./dist/client/'));
});


gulp.task('deploy', ['clean', 'deploy-server', 'deploy-web']);

// Build production files, the default task
//gulp.task('default', ['clean'], function (cb) {
    //runSequence('styles', ['jshint', 'html', 'images', 'fonts', 'copy'], cb);
//});

