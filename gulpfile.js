import gulp from 'gulp';
import browserSync, { watch } from 'browser-sync';
import sassPkg from 'sass';
import gulpSass from 'gulp-sass';
import cssImport from 'gulp-cssimport';
import gulpCssimport from 'gulp-cssimport';
import del from 'del';


const sass = gulpSass(sassPkg);

export const html = () => gulp
.src("src/*.html")
.pipe(gulp.dest('dist'))
.pipe(browserSync.stream());

export const css = () => gulp
.src("src/css/index.css")
.pipe(gulpCssimport({
    extensions: ['css'],
}))
.pipe(gulp.dest('dist/css'))
.pipe(browserSync.stream());

export const style = () => gulp
.src('src/scss/**/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('dist/css'))
.pipe(browserSync.stream());

export const js = () => gulp
.src("src/js/**/*.js")
.pipe(gulp.dest('dist/js'))
.pipe(browserSync.stream());

export const copy = () => gulp
    .src([
        'src/fonts/**/*',
        'src/img/**/*'
    ], {
        base: 'src'
    })
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({
        once: true
    }));

export const server = () => {
    browserSync.init({
        ui: false,
        notify: false,
        // tunnel: true,
        server: {
            baseDir: 'dist'
        }
    })
    // Выдаёт ошибку "illegal operation on a directory watch", почему?
    // gulp.watch('./src/**/*.html', html); 
    // gulp.watch('./src/css/**/*.css', css); 
    // gulp.watch('./src/css/**/*.scss', style); 
    // gulp.watch('./src/js/**/*.js', js) 
    // gulp.watch([
    //     './src/img/**/*',
    //     './src/fonts/**/*'

    // ], copy); 
};


export const clear = () => del('dist/**/*', {forse: true,});



export const base = gulp.series(clear,gulp.parallel(html, style, js, copy));
export const build = gulp.series(clear, base);
export default gulp.series(base, server, watch);



//  


// export default gulp.series(
//     gulp.parallel(html, css, js, copy),
//     server, watch
// )

