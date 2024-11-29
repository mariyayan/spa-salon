const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task ('styles', function(done) {                                        
    return gulp.src('./styles/*.css')    

    .pipe(concat('styles.css')) 
    .pipe(gulp.dest('./dist/'))
    done();
}   );