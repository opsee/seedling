module.exports = function(grunt) {

  var load = require('load-grunt-tasks')(grunt)
  , rewrite = require( "connect-modrewrite" )
  ;

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 5000,
          base: '',
          open:true,
          middleware: function(connect, options, middlewares) {
            var rules = [
                "!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.woff|\\.tiff|\\.gif$ /index.html"
            ];
            middlewares.unshift( rewrite( rules ) );
            return middlewares;
          }
        }
      }
    },
    watch:{
      grunt:{
        files:['Gruntfile.js'],
        tasks:[]
      },
      sass:{
        files:['scss/**/*.scss'],
        tasks:['compass:dist']
      },
      css:{
        options:{
          livereload:true
        },
        files:['public/css/**/*.css']
      },
      pages:{
        options:{
          livereload:true
        },
        files:['public/**/*.html']
      }
    },
    compass:{
      dist:{
        options:{
          cssDir:'css',
          sassDir:'scss',
          imagesDir:'public/img',
          fontsPath:'fonts',
          require:['breakpoint','sass-css-importer', 'compass-flexbox'],
          httpPath:'',
          relativeAssets:true,
          noLineComments:true,
          outputStyle:'compact'
        }
      },
    },
  });

  grunt.registerTask('default', ['compass','connect','watch']);

};
