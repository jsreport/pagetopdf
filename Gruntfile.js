module.exports = function(grunt) {
    grunt.initConfig({
        cssmin: {
            combine: {
                files: {
                    'public/css/pagetopdf.min.css': [
                        'public/css/prettify.css', 'public/css/metro-bootstrap.min.css', 'public/css/metro-bootstrap-responsive.min.css', 
                        'public/css/style.css', 'public/css/iconFont.min.css', 'public/css/custom.css'
                    ]
                }
            }
        },

        uglify: {
            basic: {
                files: {
                    'public/js/pagetopdf.min.js': ['public/js/jquery-2.1.0.min.js', 'public/js/jquery.widget.min.js',
                        'public/js/prettify.js', 'public/js/metro.min.js', 'public/js/custom.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin', 'uglify']);
}