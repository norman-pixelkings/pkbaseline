'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    shell: {
      bundler: {
        command: 'bundle'
      },
      bower: {
        command: 'bower install'
      }
    },

    bower_concat: {
      all: {
        dest: 'build/js/_bower.js',
        exclude: [
          'Cortana',
        ],
      }
    },

    // Grunt Contrib Compass
    // https://github.com/gruntjs/grunt-contrib-compass
    compass: {
      options: {
        sassDir: 'sass',
        cssDir: 'build/css',
        bundleExec: true,
            require: ['sass-globbing', 'susy', 'breakpoint'],
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
        }
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compact',
        }
      },
    },

    hologram: {
      generate: {
        options: {
          config: './hologram/hologram_config.yml'
        }
      }
    },

    // Grunt connect
    // https://github.com/gruntjs/grunt-contrib-connect
    connect: {
      server: {
       options: {
        livereload: 1337,
        port: 9001,
        base: 'build/',
        open: {
          target: 'http://localhost:9001/styleguide/',
        }
       }
     }
    },

    // Watch for changes and trigger compass and livereload
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      compass: {
        files: ['sass/**/*'],
        tasks: ['compass:dev']
      },
      hologram: {
        files: ['sass/**/*'],
        tasks: ['hologram']
      },
      livereload: {
        options: {
          livereload: 1337
        },
        files: [
          'build/styleguide/*.html',
        ]
      }
    },

    phantomcss: {
       options: {
         mismatchTolerance: 0.05,
         logLevel: 'error',
         cleanupComparisonImages: true,
       },
       sass: {
         options: {
           altRunner: true,
           screenshots: 'phantomcss/baselines',
           results: 'phantomcss/results',
           viewportSize: [1280, 800],
         },
         src: [
            './sass/**/*.js'
         ]
       },
    },

    photobox: {
        task: {

            options: {
                indexPath: 'build/photobox/',
                screenSize: ['320','768','1024'],
                userName: '',
                password: '',
                template: 'canvas'


            }
        }
    }


  });


  grunt.loadNpmTasks('grunt-phantomcss');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  //grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-hologram');
  grunt.loadNpmTasks('grunt-photobox');

  grunt.registerTask('default', [
    'shell:bundler',
    'shell:bower',
    //'bower_concat',
    'compass:dev',
    'hologram',
    'connect',
    'phantomcss',
    'watch'

  ]);

};