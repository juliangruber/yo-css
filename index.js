'use strict'

const slug = require('hyphenate-style-name')

module.exports = (...styles) => {
  const style = {}
  for (let _style of styles) {
    if (_style) Object.assign(style, _style)
  }

  return Object.keys(style)
    .map(key => {
      return `${slug(key)}: ${style[key]}`
    })
    .join('; ')
}
