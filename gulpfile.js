var gulp = require('gulp');
var sass = require('gulp-sass');

/*
 * SASS
 */
const sassConfig = {
    input: './dev/css/main.scss',
    output: './static/css/'
};

gulp.task('sass', function () {
    gulp.src(sassConfig.input)
        .pipe(sass({

        }).on('error', function(err) {
            console.log(err);
        }))
        .pipe(gulp.dest(sassConfig.output));
});

/*
 * WATCH
 */

gulp.task('watch', ['sass'], function() {
    gulp.watch('./dev/css/**/*.scss', ['sass']);
    // gulp.watch('./soft/static/js/**/*.js', ['js']);
});

gulp.task('default', ['sass']);
