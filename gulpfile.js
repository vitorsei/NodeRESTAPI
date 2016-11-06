var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha'),
    env = require('gulp-env'),
    supertest = require('supertest');


gulp.task('serve', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 5000
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function () {
            console.log('Restarting');
        });
});

gulp.task('test', function () {
    env({vars: {ENV: 'Test'}});
    gulp.src('tests/*.js', {read: false})
        .pipe(gulpMocha({reporter: 'spec'}))
});

gulp.task('default', ['serve']);