module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    }
  });
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    }
    


  grunt.loadNpmTasks('grunt-contrib-jshint', 'grunt-sass');

  grunt.registerTask('default', ['jshint'] ['sass']);

};