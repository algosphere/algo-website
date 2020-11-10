const { src, dest, series } = require('gulp'),
      replace               = require('gulp-replace')

function html() {
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
    .pipe(dest('public'))
}

exports.default = series(html)
