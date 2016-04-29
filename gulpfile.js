/**
 * Created by david on 17/03/16.
 */
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var karmaServer = require('karma').Server;

gulp.task('hint', function() {

    return gulp.src('./app/**/*.js')
        .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', function (done) {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});