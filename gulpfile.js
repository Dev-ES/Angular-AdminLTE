/**
 * Created by david on 17/03/16.
 */
var gulp   = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('hint', function() {

    return gulp.src('./js/**/*.js')
        .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});