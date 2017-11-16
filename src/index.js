// index.js
// Common Config
let m = require('mithril')
require('./router/route')
require('./assets/scss/global.scss')

// Components
// let MyComponent = require('./components/mycomponent')

// m.mount(document.getElementById('sub-main'), MyComponent)
m.render(document.getElementById('hello'), 'Hello Mithril.js')
