const { src, dest, series } = require('gulp'),
      replace               = require('gulp-replace'),
      beautify              = require('gulp-pretty-html'),
      imagemin              = require('gulp-imagemin'),
      svgmin                = require('gulp-svgmin');

function htmlDev() {
  return src('public/**/*.html')
    .pipe(replace('&laquo; ', '&laquo;&#160;'))
    .pipe(replace(' &raquo;', '&#160;&raquo;'))
    .pipe(replace('« ', '&laquo;&#160;'))
    .pipe(replace(' »', '&#160;&raquo;'))
    .pipe(replace(' :', '&#160;:'))
    .pipe(replace(' ;', '&#160;;'))
    .pipe(replace(' !', '&#160;!'))
    .pipe(replace(' ?', '&#160;?'))
    .pipe(replace(' %', '&#160;%'))
    .pipe(replace(' €', '&#160;€'))
    .pipe(replace(' <i ', '&#160;<i '))
    .pipe(replace(' <i>', '&#160;<i>'))
    .pipe(replace('</i> ', '</i>&#160;'))
    .pipe(replace(' <svg ', '&#160;<svg '))
    .pipe(replace(' <svg>', '&#160;<svg>'))
    .pipe(replace('</svg> ', '</svg>&#160;'))
    .pipe(beautify({
      indent_size: 2,
      preserve_newlines: false,
      extra_liners: []
    }))
    .pipe(dest('public'))
}

function htmlProd() {
  return src('public/**/*.html')
    .pipe(replace('&laquo; ', '&laquo;&#160;'))
    .pipe(replace(' &raquo;', '&#160;&raquo;'))
    .pipe(replace('« ', '&laquo;&#160;'))
    .pipe(replace(' »', '&#160;&raquo;'))
    .pipe(replace(' :', '&#160;:'))
    .pipe(replace(' ;', '&#160;;'))
    .pipe(replace(' !', '&#160;!'))
    .pipe(replace(' ?', '&#160;?'))
    .pipe(replace(' %', '&#160;%'))
    .pipe(replace(' €', '&#160;€'))
    .pipe(replace(' <i ', '&#160;<i '))
    .pipe(replace(' <i>', '&#160;<i>'))
    .pipe(replace('</i> ', '</i>&#160;'))
    .pipe(replace(' <svg ', '&#160;<svg '))
    .pipe(replace(' <svg>', '&#160;<svg>'))
    .pipe(replace('</svg> ', '</svg>&#160;'))
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

function svg() {
  return src('assets/icons/*.svg')
  .pipe(svgmin({
    plugins: [{
      mergePaths: {
        noSpaceAfterFlags: false
      }
    }, {
      convertPathData: {
        noSpaceAfterFlags: false
      }
    }]
  }))
  .pipe(dest('static/fonts/icons/svg'))
}

exports.dev = series(htmlDev, imgGlobal);
exports.prod = series(htmlProd, imgGlobal);
exports.svg = series(svg);
