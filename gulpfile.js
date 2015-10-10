'use strict';

var gulp = require('gulp');
var config = require('./config');
var requireDirectory = require('require-directory');
var tasks = requireDirectory(module, './gulp_tasks');

for (var taskName in tasks) {
    var setup = tasks[taskName];

    if (setup && typeof(setup) === 'function') {
        setup(gulp, config);
    }
}

gulp.task('default', ['browser-sync']);