'use strict';

var express = require('express');
var gutil = require('gulp-util');


/**
 * Export browser-sync tasks
 *
 * @param gulp - gulp instance
 * @param config - browserSync config
 *
 *
 browserSync: {
server: {
// We're serving the src folder as well
// for sass sourcemap linking
baseDir: [src + '/www', dest]
}
},
 */
module.exports = function(gulp, config) {


    /**
     * browser-sync task
     * —---------------
     *
     * The task reloading development page when user change source files
     */
    gulp.task('browser-sync', ['build'], function() {

        var router = express.Router();

        router.use('/debets', function (req, res) {

            var debets = require('../src/www/debets.json');
            res.json(debets);
        });
        var server = express();
        server.use(router);

        config.browserSync.server.baseDir.map(function(dir) {
            server.use(express.static(dir))
        });

        var port = config.browserSync.server.port || 3000;

        server.listen(port, function() {
            gutil.log('Running', gutil.colors.blue('http://localhost:' + port));

            require('open')('http://localhost:' + port);
        });
    });
};