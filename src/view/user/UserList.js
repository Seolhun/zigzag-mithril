"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {Stream} from 'mithril/stream'
var m = require("mithril");
var UserModel_1 = require("../../models/UserModel");
exports.default = {
    oninit: function () {
        return (UserModel_1.default.loadList());
    },
    view: function () {
        return (m("div", { class: 'col-sm-12' }, UserModel_1.default.list.map(function (user) {
            return (m("a", { class: 'user-list-item', href: '/edit/' + user.id, oncreate: m.route.link }, user.firstName + ' ' + user.lastName));
        })));
    }
};
//# sourceMappingURL=UserList.js.map