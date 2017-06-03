/**
 * 这个脚本的作用主要将零散的svg图标生成一个图标的字体文件
 * 教程: https://www.npmjs.com/package/gulp-iconfont
 *      https://github.com/backflip/gulp-iconfont-css/blob/master/index.js
 */
var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'Icons';

gulp.task('iconfont', function () {
	gulp.src(['src/assets/icons/*.svg'])
		.pipe(iconfontCss({
			fontName: fontName,
			targetPath: 'icons.css',
			fontPath: './'
		}))
		.pipe(iconfont({
			fontName: fontName,
			formats: ['ttf', 'eot', 'woff', 'woff2', 'svg']
		}))
		.pipe(gulp.dest('src/assets/fonts/'));
});

/**
 * 这个脚本的作用主要将零散的svg图标拼接成一大张svg图标雪碧图
 */
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var inject = require('gulp-inject');
var path = require('path');

gulp.task('svgstore', function () {
	return gulp
		.src('src/assets/icons/*.svg')
		.pipe(svgmin(function (file) {
			var prefix = path.basename(file.relative, path.extname(file.relative));
			return {
				plugins: [{
					cleanupIDs: {
						prefix: prefix + '-',
						minify: true
					}
				}]
			}
		}))
		.pipe(svgstore())
		.pipe(gulp.dest('src/assets/images/'));
});
