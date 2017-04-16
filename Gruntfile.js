module.exports = function (grunt) {
    var options = { config: { src: 'grunt/*.js' } };
    var configs = require('load-grunt-configs')(grunt, options);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig(configs);

    grunt.registerTask('default', ['clean', 'babel', 'copy']);

};
// require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

