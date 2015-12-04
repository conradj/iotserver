var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');
//var less = require('gulp-less');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  gulp.watch(paths.source, ['build-system', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.css, ['build-css', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.style, ['css']).on('change', reportChange);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('css', function() {
    return gulp.src(paths.style)
        .pipe(browserSync.stream());
});

// gulp.task('less', function () {
//   return gulp.src('./less/**/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('./public/css'));
// });
