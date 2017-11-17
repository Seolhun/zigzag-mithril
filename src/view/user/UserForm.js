"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
var UserModel_1 = require("../../models/UserModel");
exports.default = {
    oninit: function (vnode) {
        UserModel_1.default.getById(Number(vnode.attrs.id));
    },
    // view() {
    //   return m('form.user-form',
    //     {
    //       onsubmit: (e: Event) => {
    //         e.preventDefault()
    //         userModel.save()
    //       }
    //     },
    //     [
    //       m('label.label', 'First name'),
    //       m('input.input[type=text][placeholder=First name]', {
    //         oninput: m.withAttr('value', value => {
    //           userModel.current.firstName = value
    //         }),
    //         value: userModel.current.firstName
    //       }),
    //       m('label.label', 'Last name'),
    //       m('input.input[placeholder=Last name]', {
    //         oninput: m.withAttr('value', value => {
    //           userModel.current.lastName = value
    //         }),
    //         value: userModel.current.lastName
    //       }),
    //       m('button.button[type=submit]', 'Save'),
    //     ]
    //   )
    // },
    view: function () {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-12' },
                    m("form", { class: 'user-form', onsubmit: function (e) {
                            e.preventDefault();
                            UserModel_1.default.save();
                        } },
                        m("label", { class: 'label' },
                            "FirstName",
                            m("input", { class: 'input', placeholder: 'First Name', oninput: m.withAttr('value', function (value) {
                                    UserModel_1.default.current.firstName = value;
                                }), value: UserModel_1.default.current.firstName })),
                        m("label", { class: 'label' },
                            "LastName",
                            m("input", { class: 'input', placeholder: 'Last Name', oninput: m.withAttr('value', function (value) {
                                    UserModel_1.default.current.lastName = value;
                                }), value: UserModel_1.default.current.lastName })),
                        m("button", { class: 'btn btn-primary', type: 'submit' }, "Save"))))));
    }
};
//# sourceMappingURL=UserForm.js.map