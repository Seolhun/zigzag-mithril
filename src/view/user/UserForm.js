"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
var user_1 = require("../../models/user");
exports.default = {
    oninit: function (vnode) {
        user_1.default.load(Number(vnode.attrs.id));
    },
    view: function () {
        return m('form.user-form', {
            onsubmit: function (e) {
                e.preventDefault();
                user_1.default.save();
            }
        }, [
            m('label.label', 'First name'),
            m('input.input[type=text][placeholder=First name]', {
                oninput: m.withAttr('value', function (value) {
                    user_1.default.current.firstName = value;
                }),
                value: user_1.default.current.firstName
            }),
            m('label.label', 'Last name'),
            m('input.input[placeholder=Last name]', {
                oninput: m.withAttr('value', function (value) {
                    user_1.default.current.lastName = value;
                }),
                value: user_1.default.current.lastName
            }),
            m('button.button[type=submit]', 'Save'),
        ]);
    }
};
//# sourceMappingURL=UserForm.js.map