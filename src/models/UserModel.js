"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
var userModel = {
    list: [],
    loadList: function () {
        return m.request({
            method: 'GET',
            url: 'https://rem-rest-api.herokuapp.com/api/users',
            withCredentials: true
        })
            .then(function (result) {
            userModel.list = result.data;
        });
    },
    current: {},
    load: function (id) {
        return m.request({
            method: 'GET',
            url: 'https://rem-rest-api.herokuapp.com/api/users/' + id,
            withCredentials: true
        })
            .then(function (result) {
            userModel.current = result;
        });
    },
    save: function () {
        return m.request({
            method: 'PUT',
            url: 'https://rem-rest-api.herokuapp.com/api/users/' + userModel.current.id,
            data: userModel.current,
            withCredentials: true
        });
    }
};
exports.default = userModel;
//# sourceMappingURL=UserModel.js.map