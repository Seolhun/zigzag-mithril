import m from 'mithril';
import localStyle from '../../../assets/scss/user/user.scss';
import { Client, userModel } from '../../models/user/UserModel';
import stream from 'mithril/stream';
import { commonCtrl } from '../../common/CommonCtrl';
import { commonFormCtrl } from '../../common/commonFormCtrl';
var userFormModel = {
    emailField: {
        type: 'email',
        value: stream(''),
        placeholder: 'Email ',
        errorMsg: '',
        validate: function () {
            var bool = commonCtrl.isNull(this.emailField.value());
            this.emailField.errorMsg = bool ? '' : 'Require a Email';
            return bool;
        }
    },
    nicknameField: {
        type: 'text',
        value: stream(''),
        placeholder: 'Nickname',
        errorMsg: '',
        validate: function () {
            var bool = commonCtrl.isNickname(this.nicknameField.value());
            this.nicknameField.errorMsg = bool ? '' : 'Enter a only digits and alphabets';
            return this.errorMsg.length === 0;
        }
    },
    passwordField: {
        type: 'password',
        value: stream(''),
        placeholder: 'Password',
        errorMsg: '',
        validate: function () {
            if (commonCtrl.isNull(this.passwordField.value())) {
                this.nicknameField.errorMsg = 'Require a Password';
            }
            else {
                if (this.rePasswordField.value() !== '') {
                    this.passwordField.errorMsg = this.passwordField.value() === this.rePasswordField.value() ? '' : 'Enter a password, such as Re-Password.';
                }
            }
            return this.errorMsg.length === 0;
        }
    },
    rePasswordField: {
        type: 'password',
        value: stream(''),
        placeholder: 'Re-Password',
        errorMsg: '',
        validate: function () {
            if (commonCtrl.isNull(this.rePasswordField.value())) {
                this.nicknameField.errorMsg = 'Require a Password';
            }
            else {
                if (this.passwordField.value() !== '') {
                    this.rePasswordField.errorMsg = this.rePasswordField.value() === this.passwordField.value() ? '' : 'Enter a Re-password, such as Password.';
                }
            }
            return this.errorMsg.length === 0;
        }
    },
    birthField: {
        value: stream(''),
        placeholder: 'Birth Day',
        errorMsg: '',
        validate: function () {
            this.birthField.errorMsg = this.birthField.value().length > 5 ? 'Expected no more than 5 characters' : '';
            return this.errorMsg.length === 0;
        }
    },
    genderField: {
        type: 'radio',
        name: 'gender',
        value: stream(''),
        placeholder: 'Gender',
        errorMsg: '',
        validate: function () {
            var bool = commonCtrl.isNull(this.genderField.value());
            this.genderField.errorMsg = bool ? '' : 'Require a Email';
            return bool;
        }
    },
    profileField: {
        type: 'text',
        value: stream(''),
        placeholder: 'Profile',
        errorMsg: '',
        validate: function () {
            var bool = commonCtrl.isNull(this.genderField.value());
            this.genderField.errorMsg = bool ? '' : 'Require a Email';
            return bool;
        }
    },
    receiveInfoField: {
        type: 'checkbox',
        value: stream([]),
        placeholder: 'Received Information',
        errorMsg: '',
        validate: function () {
            var bool = commonCtrl.isNull(this.genderField.value());
            this.genderField.errorMsg = bool ? '' : 'Require a Email';
            return bool;
        }
    }
};
//--------------------------------------------
export var UserForm = {
    data: function () {
        var user = new Client;
        return {
            'user': user
        };
    },
    methods: function () {
        var isNicknameDuplicated = function (nickname) {
            var user = userModel.getFromStroage(nickname);
            return user !== null;
        };
        return {
            'isNicknameDuplicated': isNicknameDuplicated
        };
    },
    view: function () {
        var _this = this;
        return (m("div", null,
            m("div", { class: 'container' },
                m("div", { id: 'serviceAgree' }),
                m("form", { id: 'userForm', class: localStyle.userForm, onsubmit: function (e) {
                        e.preventDefault();
                    } },
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Email"),
                                commonFormCtrl.inputForm({ field: userFormModel.emailField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Nickname"),
                                commonFormCtrl.inputForm({ field: userFormModel.nicknameField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Password"),
                                commonFormCtrl.inputForm({ field: userFormModel.passwordField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Re-Password"),
                                commonFormCtrl.inputForm({ field: userFormModel.rePasswordField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Birth"),
                                commonFormCtrl.inputForm({ field: userFormModel.birthField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Information"),
                                commonFormCtrl.textAreaForm({ field: userFormModel.profileField })))),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("label", { class: 'label' }, "Gender"),
                            m("div", { class: "form-group" },
                                commonFormCtrl.checkboxForm({ field: userFormModel.genderField }, 'Male'),
                                commonFormCtrl.checkboxForm({ field: userFormModel.genderField }, 'Female')))),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("label", { class: 'label' }, "ZIGZAG \uC815\uBCF4\uB97C \uBC1B\uC544\uBCF4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
                            m("div", { class: "form-group" },
                                commonFormCtrl.checkboxForm({ field: userFormModel.receiveInfoField }, 'Phone'),
                                commonFormCtrl.checkboxForm({ field: userFormModel.receiveInfoField }, 'Email')))),
                    m("hr", null),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("button", { class: 'btn btn-primary', id: 'userFormSubmitBtn', type: 'button', onclick: function (e) {
                                    e.preventDefault();
                                    if (commonFormCtrl.validateAll(userFormModel)) {
                                        userModel.save(_this.data().user);
                                    }
                                } }, "Save")))))));
    }
};
//# sourceMappingURL=UserForm.js.map