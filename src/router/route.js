var m = require("mithril")

// Router Component
var UserList = require("../view/UserList")
var UserForm = require("../view/UserForm")

//setup routes to start w/ the `#` symbol
m.route.mode = "hash";

var Router = m.route(document.getElementById('router-view'), "/list", {
	"/list": UserList,
	"/edit/:id": UserForm
})


module.exports = Router


// //a sample module
// var dashboard = {
// 	controller: function() {
// 		return {id: m.route.param("userID")};
// 	},
// 	view: function(controller) {
// 		return m("div", controller.id);
// 	}
// }