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


        clean: ['svg_icons/compressed', 'svg_icons/output'], //removes old data

        svgmin: { //minimize SVG files
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                expand: true,
                cwd: 'svg_icons/raw',
                src: ['*.svg'],
                dest: 'svg_icons/compressed',
                ext: '.colors-light-danger-success.svg'
            }
        },

        grunticon: { //makes SVG icons into a CSS file
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'svg_icons/compressed',
                    src: ['*.svg'],
                    dest: 'svg_icons/output'
                }],
                options: {
                    cssprefix: '.icon-',
                    colors: {
                        light: '#ccc',
                        danger: '#ed3921',
                        success: '#8DC63F'
                    }
                }
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
                    screenSize: ['320', '768', '1024'],
                    userName: '',
                    password: '',
                    template: 'canvas'

                }
            }
        },

        csscss: {
            dist: {
                src: ['build/css/style.css'],
            },
            options: {
                colorize: false,
                verbose: true,
                outputJson: false,
                minMatch: 2,
                compass: true
                //ignoreProperties: 'padding',
                //ignoreSelectors: '.rule-a'
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
    grunt.loadNpmTasks('grunt-csscss');


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-grunticon');


    grunt.registerTask('icons', ['clean', 'svgmin', 'grunticon']);


    grunt.registerTask('default', [
        'shell:bundler',
        'shell:bower',
        //'bower_concat',
        'compass:dev',
        'hologram',
        'connect',
        'phantomcss',
        'csscss',
        'watch'
    ]);

};
