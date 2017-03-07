'use strict'

const slug = require('hyphenate-style-name')

module.exports = (...styles) => {
  const style = Object.assign({}, ...styles)
  return Object.keys(style)
    .map(key => `${slug(key)}: ${style[key]}`)
    .join('; ')
}
