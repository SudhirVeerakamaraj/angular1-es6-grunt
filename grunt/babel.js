module.exports = {

    options: {
        sourceMap: true,
        presets: ['es2015']
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.js'],
            dest: 'dist/'
        }]
    }

};