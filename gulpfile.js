const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const glob = require('gulp-sass-glob');
const runSequence = require('run-sequence');
const watch = require('gulp-watch');
// const browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  // global.watch = true;
  watch('./app/private/scss/**/*.scss', () => {
   runSequence('sass');
 });
});

gulp.task('sass', () => {
  return gulp
    .src('./app/private/scss/index.scss')
    .pipe(plumber())
    .pipe(glob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/public/css'))
    // .pipe(browserSync.stream());
});
gulp.task('default', ['sass', 'watch'])
