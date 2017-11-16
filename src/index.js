// index.js
// Common Config
var m = require("mithril")
var Router = require("./router/route")

// Components
var MyComponent = require("./components/mycomponent")


// m.mount(document.getElementById('sub-main'), MyComponent)
m.render(document.getElementById("hello"), "Hello Mithril.js")