
# yo-css

[yo-yo](https://github.com/maxogden/yo-yo) helper for inline css, inspired by [React: CSS in JS by vjeux](https://speakerdeck.com/vjeux/react-css-in-js).

## Example

```js
const css = require('yo-css')
const yo = require('yo-yo')

const style = {
  backgroundColor: 'red',
  width: 0,
  border: '3px'  
}

const overwrite = {
  backgroundColor: 'green'  
}

const el = yo`
  <div style=${css(style, overwrite)}>
    Test!
  </div>
`

document.body.appendChild(el)
```

## Installation

```bash
$ npm install yo-css
```

## API

### css(...styles)

Given any number of style objects, merges them into one and returns a valid string of css. Later style objects have precedence. Use camelCase for your properties, this function converts them into proper css case.

## License

MIT
