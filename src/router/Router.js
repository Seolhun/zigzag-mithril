"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
var Root_1 = require("../view/Root");
var UserList_1 = require("../view/user/UserList");
var UserForm_1 = require("../view/user/UserForm");
var SignIn_1 = require("../view/user/SignIn");
m.route(document.getElementById('router-view'), '/', {
    '/': {
        render: function () {
            return m(Root_1.default);
        }
    },
    '/list': {
        render: function () {
            return m(UserList_1.default);
        }
    },
    '/edit/:id': {
        render: function (vnode) {
            return m(UserForm_1.default, vnode.attrs);
        }
    },
    '/join': {
        render: function () {
            return m(SignIn_1.default);
        }
    }
});
//# sourceMappingURL=Router.js.map