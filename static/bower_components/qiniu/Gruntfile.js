module.exports = function( grunt ) {

    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            dist: {
                src: [ "dist/qiniu.js" ],
                options: {
                    jshintrc: ".jshintrc"
                }
            },
            grunt: {
                src: [ "Gruntfile.js" ],
                options: {
                    jshintrc: ".jshintrc"
                }
            },
        },
        build: {
            all: {
                dest: "dist/qiniu.js",
                src: ["src/qiniu.js"]
            }
        },
        uglify: {
            all: {
                files: {
                    "dist/qiniu.min.js": [ "dist/qiniu.js" ]
                },
                options: {
                    banner: "/*! <%= pkg.name %> v<%= pkg.version %> | Copyright 2015 by Qiniu */",
                    sourceMap: "dist/qiniu.min.map",
                    compress: {
                        hoist_funs: false,
                        join_vars: false,
                        loops: false,
                        unused: false
                    },
                    beautify: {
                        ascii_only: true
                    }
                }
            }
        }
    });

    grunt.registerMultiTask(
        "build",
        "Embed date/version",
        function() {

            var source = grunt.file.read( "src/qiniu.js" ),
                version = grunt.config( "pkg.version" );

            // Embed Version
            // Embed Date
            source = source.replace( /@VERSION/g, version )
                .replace( "@DATE", function () {
                    var date = new Date();

                    // YYYY-MM-DD
                    return [
                        date.getFullYear(),
                        date.getMonth() + 1,
                        date.getDate()
                    ].join( "-" );
                });

            // Write concatenated source to file
            grunt.file.write( "dist/qiniu.js", source );

            // Otherwise, print a success message.
            grunt.log.writeln( "File 'dist/qiniu.js' created." );
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.registerTask( "default", [ "build", "jshint", "uglify" ] );
};