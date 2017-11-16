// src/models/User.js
var m = require("mithril")

var User = {
	list: [],
	// controller: function () {
	// 	var ctrl = this,
	// 		data = [
	// 			{id: 1, name: "John"},
	// 			{id: 2, name: "Mary"},
	// 			{id: 3, name: "Seniqua"}
	// 		];
	//
	// 	ctrl.data = data;
	// 	//  Has to use a prop for the current user
	// 	ctrl.currentUser = m.prop(data[1]);
	// 	ctrl.changeUser = function (id) {
	// 		console.log(id);
	// 	};
	// },

	loadList: function () {
		return m.request({
			method: "GET",
			url: "https://rem-rest-api.herokuapp.com/api/users",
			withCredentials: true,
		}).then(function (result) {
			User.list = result.data
		})
	},

	current: {},
	load: function(id) {
		return m.request({
			method: "GET",
			url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
			withCredentials: true,
		})
			.then(function(result) {
				User.current = result
			})
	}
}

module.exports = User