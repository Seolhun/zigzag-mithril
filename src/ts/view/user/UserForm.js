import m from 'mithril';
import localStyle from '../../../assets/scss/user/user.scss';
import { userModel } from '../../models/user/UserModel';
import stream from 'mithril/stream';
//--------------------------------------------
//Private Methods. Never export this object.
var userFormCtrl = {
    validateAll: function (model) {
        Object.keys(model).forEach(function (field) {
            return model[field].validate();
        });
    },
    isNicknameDuplicated: function (nickname) {
        var user = userModel.getFromStroage(nickname);
        return user !== null;
    },
    inputForm: function (attrs) {
        return (m("div", null,
            m("input", { type: attrs.field.type, value: attrs.field.value(), placeholder: attrs.field.placeholder, className: attrs.field.error ? 'error' : '', class: 'form-control', id: attrs.field.id, oninput: m.withAttr('value', attrs.field.value) }),
            m("p", { class: 'isError' }, attrs.field.errorMsg)));
    },
    textAreaForm: function (attrs) {
        return (m("div", null,
            m("textarea", { value: attrs.field.value(), placeholder: attrs.field.placeholder, className: attrs.field.error ? 'error' : '', class: "form-control", oninput: m.withAttr('value', attrs.field.value) }),
            m("p", { class: 'isError' }, attrs.field.error)));
    }
};
var userFormModel = {
    emailField: {
        type: 'email',
        value: stream(''),
        placeholder: 'Email',
        errorMsg: '',
        validate: function () {
            this.emailField.errorMsg =
                this.emailField.value().length < 10 ? 'Expected at least 10 characters' : '';
        }
    },
    nicknameField: {
        type: 'text',
        value: stream(''),
        placeholder: 'Nickanme',
        errorMsg: '',
        validate: function () {
            this.nicknameField.errorMsg =
                this.nicknameField.value().length > 5 ? 'Expected no more than 5 characters' : '';
        }
    },
    passwordField: {
        type: 'password',
        value: stream(''),
        placeholder: 'Password',
        errorMsg: '',
        validate: function () {
            this.passwordField.errorMsg =
                this.passwordField.value().length > 5 ? 'Expected no more than 5 characters' : '';
        }
    },
    rePasswordField: {
        type: 'password',
        value: stream(''),
        placeholder: 'Re-Password',
        errorMsg: '',
        validate: function () {
            this.rePasswordField.errorMsg =
                this.rePasswordField.value().length > 5 ?
                    'Expected no more than 5 characters' : '';
        }
    },
    birthField: {
        value: stream(''),
        placeholder: 'Birth Day',
        errorMsg: '',
        validate: function () {
            this.birthField.errorMsg =
                this.birthField.value().length > 5 ?
                    'Expected no more than 5 characters' : '';
        }
    },
    profileField: {
        type: 'text',
        value: stream(''),
        placeholder: 'Profile',
        errorMsg: '',
        validate: function () {
            this.profileField.errorMsg =
                this.profileField.value().length > 5 ?
                    'Expected no more than 5 characters' : '';
        }
    },
    genderField: {
        type: 'radio',
        value: stream(''),
        placeholder: 'Gender',
        errorMsg: '',
        validate: function () {
            this.genderField.errorMsg =
                this.genderField.value().length > 5 ?
                    'Expected no more than 5 characters' : '';
        }
    },
    receiveField: {
        type: 'checkbox',
        value: stream(''),
        placeholder: 'Received Information',
        errorMsg: '',
        validate: function () {
            this.receiveField.errorMsg = this.receiveField.value().length > 5 ? 'Expected no more than 5 characters' : '';
        }
    }
};
//Main View
export var UserForm = {
    view: function () {
        return (m("div", null,
            m("div", { class: 'container' },
                m("div", { id: 'serviceAgree' }),
                m("form", { id: 'userForm', class: localStyle.userForm, onsubmit: function (e) {
                        e.preventDefault();
                        userModel.save();
                    } },
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Email"),
                                userFormCtrl.inputForm({ field: userFormModel.emailField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Nickname"),
                                userFormCtrl.inputForm({ field: userFormModel.nicknameField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Password"),
                                userFormCtrl.inputForm({ field: userFormModel.passwordField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Re-Password"),
                                userFormCtrl.inputForm({ field: userFormModel.rePasswordField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Birth"),
                                userFormCtrl.inputForm({ field: userFormModel.birthField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Information"),
                                userFormCtrl.textAreaForm({ field: userFormModel.profileField })))),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("div", { class: "form-group" },
                                m("label", { for: "genderMale", class: 'label' },
                                    m("input", { type: "radio", name: 'gender', id: "genderMale", value: 'Male', onchange: m.withAttr('value', function (value) {
                                            userModel.current.sex = value;
                                        }), checked: userModel.current.sex === 'Male' }),
                                    "Male"),
                                m("label", { for: "genderFemail", class: 'label' },
                                    m("input", { type: "radio", name: 'gender', id: "genderFemail", value: 'Female', onchange: m.withAttr('value', function (value) {
                                            userModel.current.sex = value;
                                        }), checked: userModel.current.sex === 'Female' }),
                                    "Female")))),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("label", { class: 'label' }, "ZIGZAG \uC815\uBCF4\uB97C \uBC1B\uC544\uBCF4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
                            m("div", { class: "form-group" },
                                m("label", { for: 'phoneCheckbox', class: 'label' },
                                    m("input", { type: "checkbox", value: "Phone", id: 'phoneCheckbox', onchange: m.withAttr('checked', function (checked) {
                                            userFormCtrl.putOrRemove(checked, 'Phone');
                                        }) }),
                                    "Phone"),
                                m("label", { for: 'emailCheckbox', class: 'label' },
                                    m("input", { type: "checkbox", id: 'emailCheckbox', value: "Email", onchange: m.withAttr('checked', function (checked) {
                                            userFormCtrl.putOrRemove(checked, 'Email');
                                        }) }),
                                    "Email")))),
                    m("hr", null),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("button", { class: 'btn btn-primary', id: 'userFormSubmitBtn', type: 'button', onclick: function (e) {
                                    e.preventDefault();
                                    userModel.save();
                                } }, "Save")))))));
    }
};
//# sourceMappingURL=UserForm.js.map