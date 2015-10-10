var src = './src';
var www = src + '/www';
var dist = './dist';

module.exports = {
    browserSync: {
        server: {
            port: 8000,
            baseDir: [www, dist, './node_modules']
        }

    }
};