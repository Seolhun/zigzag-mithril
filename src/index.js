// index.js
var m = require("mithril")
var MyComponent = require("./component/mycomponent")


m.mount(document.getElementById('sub-main'), MyComponent)
m.render(document.getElementById("main"), "Hello Mithril.js")