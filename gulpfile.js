var gulp = require('gulp');
var less = require('gulp-less'); 
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('compile-less', function() {  
   return gulp.src('./src/less/index.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
})

gulp.task('watch-less', function() {  
    gulp.watch('./src/less/index.less' , gulp.series('compile-less'));
  });

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "/"
        }
    }); 
    gulp.watch("./src/less/index.less").on("change", reload);
});

gulp.task('default', gulp.series('watch-less', 'serve'));