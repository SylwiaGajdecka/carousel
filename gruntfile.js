module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

	sass: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
				'css/style.css': 'sass/style.sass'
			}
		}
	},

	watch: {
  		css: {
    		files: '**/*.sass',
    		tasks: ['sass'],
    		options: {
      			livereload: true,
    		},
  		},
	},


  	jshint: {
    	all: ['Gruntfile.js', '/**/*.js', 'test/**/*.js']
  	}

});

  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
};