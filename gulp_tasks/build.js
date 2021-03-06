var watchify = require('watchify');
var browserify = require('browserify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var assign = require('lodash').assign;

// add custom browserify options here
var customOpts = {
    entries: ['./src/index.js'],
    standalone: 'startWidget',
    debug: true
};

module.exports = function (gulp, config) {
    var opts = assign({}, watchify.args, customOpts);
    var b = watchify(browserify(opts));

    gulp.task('build', bundle); // so you can run `gulp js` to build the file

    b.on('update', bundle); // on any dep update, runs the bundler
    b.on('log', gutil.log); // output build logs to terminal

    function bundle() {
        return b.bundle()
            // log errors if they happen
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('bundle.js'))
            // optional, remove if you don't need to buffer file contents
            .pipe(buffer())
            // optional, remove if you dont want sourcemaps
            .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
            // Add transformation tasks to the pipeline here.
            .pipe(sourcemaps.write('./')) // writes .map file
            .pipe(gulp.dest('./dist'));
    }

    gulp.task('build-min', ['build'], function(){
        return
            b.bundle()
            .pipe(source('bundle.min.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest('./dist'));
    });
};
