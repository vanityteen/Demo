const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin')
const fileinclude  = require('gulp-file-include');
const less = require('gulp-less')
const csso = require('gulp-csso')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

//html任务
gulp.task('htmlmin',(cb)=>{
    // 适配src中所有文件夹下的所有html，排除src下的html文件夹中html
    gulp.src(['src/*.html','!src/common/*.html'])
        //抽取html文件中的公共代码
        .pipe(fileinclude())
        //html文件中代码的压缩操作
        // .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('dist'));
        cb()
});

//css任务
gulp.task('cssmin',(cb)=>{
    gulp.src(['src/less/*.less','src/css/*.css'])
        //less语法的转换
        .pipe(less())
        //css代码的压缩
        .pipe(csso())
        .pipe(gulp.dest('dist/css'))
    cb()
})

//js任务
gulp.task('jsmin',(cb)=>{
    gulp.src('src/js/*.js')
        //将ES6转为ES5
        .pipe(babel({
            //判断当前代码运行环境 将代码转换为当前运行环境所支持的代码
            presets:['@babel/env']
        }))
        //js代码压缩
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
    cb()
})

//复制文件夹
gulp.task('copy',(cb)=>{
    gulp.src('src/img/*')
        .pipe(gulp.dest('dist/img'))
    cb()
})

//构建任务
gulp.task('default',gulp.series('htmlmin','cssmin','jsmin','copy'))