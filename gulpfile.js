const { src, dest, series } = require('gulp'),
      replace               = require('gulp-replace'),
      beautify              = require('gulp-pretty-html'),
      imagemin              = require('gulp-imagemin');

function htmlDev() {
  return src('public/**/*.html')
    .pipe(replace('&laquo; ', '&laquo;&#160;'))
    .pipe(replace(' &raquo;', '&#160;&raquo;'))
    .pipe(replace('« ', '&laquo;&#160;'))
    .pipe(replace(' »', '&#160;&raquo;'))
    .pipe(replace(' :', '&#160;:'))
    .pipe(replace('&#160;:root', ' :root')) // fix overiding style
    .pipe(replace(' ;', '&#160;;'))
    .pipe(replace(' !', '&#160;!'))
    .pipe(replace(' ?', '&#160;?'))
    .pipe(replace(' %', '&#160;%'))
    .pipe(replace(' €', '&#160;€'))
    .pipe(beautify({
      indent_size: 2,
      preserve_newlines: false,
      extra_liners: []
    }))
    .pipe(dest('public'))
}

function htmlProd() {
  return src('public/**/*.html')
    .pipe(replace(' »', '&#160;&raquo;'))
    .pipe(replace('&#160;:root', ' :root')) // fix overiding style
    .pipe(replace(' ;', '&#160;;'))
    .pipe(replace(' !', '&#160;!'))
    .pipe(replace(' ?', '&#160;?'))
    .pipe(replace(' %', '&#160;%'))
    .pipe(replace(' €', '&#160;€'))
    .pipe(dest('public'))
}

function imgGlobal() {
  return src('public/img/**/*.*')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
    ]))
    .pipe(dest('public/img'))
}

exports.dev = series(htmlDev, imgGlobal);
exports.prod = series(htmlProd, imgGlobal);
