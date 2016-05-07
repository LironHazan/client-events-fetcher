'use strict' ;

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {

            options: {
                jshintrc: '.jshintrc'//,
            },
            all: {
                src: ['Gruntfile.js',
                    'client/**/*.js',
                    'server/**/*.js']
            },

            'server': {
                options: {
                    jshintrc: 'server/.jshintrc'
                },
                src: ['server/**/*.js', '!**/conf_example.js']
            }
        }
    });


    grunt.registerTask('default', [
        'jshint'
    ]);
};
