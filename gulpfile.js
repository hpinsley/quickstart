var gulp = require('gulp');
var config = require('./gulp.config')();
var debug = require('gulp-debug');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var del = require('del');
var path = require('path');
var _ = require('lodash');
var $ = require('gulp-load-plugins')({lazy: true});
var port = process.env.PORT || config.defaultPort;

gulp.task('default', function() {
	log("hello world.  Your sources are at " + config.alles6);
});

gulp.task('clean', function(done) {
    log('Cleaning the build folder');
    del(config.build, done);
});

gulp.task('compile', ['clean'], function() {
    return gulp
        .src(config.alles6)
        .pipe($.traceur(config.traceur.options))
        .pipe($.rename({extname:".js"}))
        .pipe(gulp.dest(config.build));    
});

//gulp.task('help', $.taskListing);

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.red(item) + ': ' + $.util.colors.blue(msg[item]));
            }
        }
    }
    else {
        $.util.log($.util.colors.blue(msg));
    }
}
