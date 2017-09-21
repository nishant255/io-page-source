'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.initConfig({ pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: 'core/less/**/*.less',
                tasks: 'less'
            }
        },
        less: {
            default: {
                options: {
                    paths: ['pages/less'],
                    yuicompress: true
                },
                files: {
                    'pages/css/pages.css': 'pages/less/pages.less'
                }
            }
        },
        copy: {
            main: {
                src: ['**/*','!**/node_modules/**','!**/dist/CNAME','!.git','!.gitgnore','!package.json','!Gruntfile.js','!gulpfile.js'],
                expand: true,
                cwd: '',
                dest: 'dist'
            }
        },
        cssmin: {
            minify: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                expand: true,
                cwd: 'dist/assets/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/assets/css/',
                ext: '.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'dist/assets/js/',
                    src: [
                        '**/*.js',
                        '!**/dist'
                    ],
                    dest: 'dist/assets/js/'
                }]
            }
        },
        clean: {
            build: {
                src: ['dist/*','!dist/.git','!dist/CNAME']
            }
        }

    });

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        ['copy','cssmin','uglify']
    );

};
