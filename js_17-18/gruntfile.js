module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/js/*.js'],
				dest: 'dist/script.main.min.js'
			}
		},
		concat_css: {
			dist: {
				src: ['src/css/*.css'],
				dest: 'dist/style.main.min.css'
			}
		},
		uglify: {
			dist: {
				src: ['dist/script.main.min.js'],
				dest: 'dist/script.main.min.js'
			}
		},
		cssmin: {
			dist: {
				src: ['dist/style.main.min.css'],
				dest: 'dist/style.main.min.css'
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'styles',
					src: ['*.scss'],
					dest: 'styles',
					ext: '.css'
				}]
			}
		},
		watch: {
			
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	

	
	grunt.registerTask('default', ['concat', 'concat_css', 'uglify', 'cssmin', 'sass']);

};
