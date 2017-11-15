// index.js
var m = require("mithril")
var MyComponent = require("./component/mycomponent")
var UserList = require("./view/UserList")
var UserForm = require("./view/UserForm")

m.route(document.body, "/list", {
	"/list": UserList,
	"/edit/:id": UserForm,
})

// m.mount(document.getElementById('user-list'), UserList)
// m.mount(document.getElementById('sub-main'), MyComponent)
// m.render(document.getElementById("main"), "Hello Mithril.js")