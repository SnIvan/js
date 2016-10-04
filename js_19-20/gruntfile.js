module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/js/*.js'],
				dest: 'dist/js/bundle.main.js'
			}
		},
		concat_css: {
			dist: {
				src: ['src/css/*.css'],
				dest: 'dist/css/style.main.css'
			}
		},
		// uglify: {
		// 	dist: {
		// 		src: ['dist/script.main.js'],
		// 		dest: 'dist/script.main.min.js'
		// 	}
		// },
		// cssmin: {
		// 	dist: {
		// 		src: ['src/style.main.css'],
		// 		dest: 'dist/style.main.min.css'
		// 	}
		// },
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.scss'],
					dest: 'src/css',
					ext: '.css'
				}]
			}
		},
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['index.html'],
					dest: 'dist',
				}],
			},
			img: { 
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['img/*.jpg', 'img/*.png'],
					dest: 'dist/'
				}]
			},
			json: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['js/data.json'],
					dest: 'dist/js'
				}]
			},
		},
		watch: {
			sass: {
			  files: ['src/css/*.scss'],
			  tasks: ['sass', 'concat_css']
			},
			concat: {
				files: ['src/js/*.js'],
				tasks: ['concat']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'concat_css', 'sass', 'copy']);
};
