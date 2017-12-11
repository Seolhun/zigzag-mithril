import m from 'mithril';
import stream from 'mithril/stream';
import localStyle from '../../../assets/scss/user/user.scss';
import { Client, userModel } from '../../models/user/UserModel';
import { commonCtrl } from '../../common/CommonCtrl';
import { commonFormCtrl } from '../../common/commonFormCtrl';
function userForm() {
    var userFormModel = {
        nicknameField: {
            type: 'text',
            value: stream(''),
            placeholder: 'Nickname',
            errorMsg: '',
            validate: function () {
                var bool = commonCtrl.isNickname(this.value());
                this.errorMsg = bool ?
                    UserForm.methods().isNicknameDuplicated(userFormModel.nicknameField.value()) ? '' : 'Already this nickname is registered.'
                    : 'Enter a 4~20 characters and Use digits and alphabets';
                return this.errorMsg.length === 0;
            }
        },
        emailField: {
            type: 'email',
            value: stream(''),
            placeholder: 'Email ',
            errorMsg: '',
            validate: function () {
                var bool = this.value().length < 1;
                this.errorMsg = bool ? 'Require a Email' : '';
                return this.errorMsg.length === 0;
            }
        },
        passwordField: {
            type: 'password',
            value: stream(''),
            placeholder: 'Password',
            errorMsg: '',
            validate: function () {
                if (this.value().length < 1) {
                    this.errorMsg = 'Require a Password';
                }
                else {
                    if (userFormModel.rePasswordField.value().length > 1) {
                        var isSame = this.value() === userFormModel.rePasswordField.value();
                        this.errorMsg = isSame ? '' : 'Enter a password, such as Re-Password.';
                        userFormModel.rePasswordField.errorMsg = isSame ? '' : 'Enter a Re-password, such as Password.';
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
                if (this.value().length < 1) {
                    this.errorMsg = 'Require a Password';
                }
                else {
                    if (userFormModel.passwordField.value().length > 1) {
                        var isSame = this.value() === userFormModel.passwordField.value();
                        this.errorMsg = isSame ? '' : 'Enter a password, such as Password.';
                        userFormModel.passwordField.errorMsg = isSame ? '' : 'Enter a Re-password, such as Re-Password.';
                    }
                }
                return this.errorMsg.length === 0;
            }
        },
        birthField: {
            type: 'date',
            value: stream(''),
            placeholder: 'Birth Day',
            errorMsg: '',
            validate: function () {
                var bool = this.value().length < 1;
                this.errorMsg = bool ? 'Require a Birth date' : '';
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
                var bool = this.value().length < 1;
                this.errorMsg = bool ? 'Require a Gender' : '';
                return this.errorMsg.length === 0;
            }
        },
        descriptionField: {
            type: 'text',
            value: stream(''),
            placeholder: 'Profile',
            errorMsg: '',
            validate: function () {
                var bool = this.value().length < 1;
                this.errorMsg = bool ? 'Require a Profile' : '';
                return this.errorMsg.length === 0;
            }
        },
        receiveInfoField: {
            type: 'checkbox',
            value: stream([]),
            placeholder: 'Received Information',
            errorMsg: '',
            validate: function () {
                return true;
            }
        }
    };
    return userFormModel;
}
export var UserForm = {
    model: Function,
    user: Client,
    oninit: function () {
        this.user = new Client();
        this.model = userForm();
    },
    methods: function () {
        var _this = this;
        var isNicknameDuplicated = function (nickname) {
            var user = userModel.getFromStroage(nickname);
            return user === null;
        };
        var setModelDataIntoUser = function (userFormModel) {
            _this.user.email = userFormModel.emailField.value();
            _this.user.nickname = userFormModel.nicknameField.value();
            _this.user.password = userFormModel.passwordField.value();
            _this.user.birth = userFormModel.birthField.value();
            _this.user.description = userFormModel.descriptionField.value();
            _this.user.gender = userFormModel.genderField.value();
            _this.user.receiveInfo = userFormModel.receiveInfoField.value();
        };
        return {
            'isNicknameDuplicated': isNicknameDuplicated,
            'setModelDataIntoUser': setModelDataIntoUser
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
                                m("label", { class: 'label' }, "Nickname"),
                                commonFormCtrl.inputForm({ field: this.model.nicknameField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Email"),
                                commonFormCtrl.inputForm({ field: this.model.emailField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Password"),
                                commonFormCtrl.inputForm({ field: this.model.passwordField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Re-Password"),
                                commonFormCtrl.inputForm({ field: this.model.rePasswordField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Birth"),
                                commonFormCtrl.inputForm({ field: this.model.birthField })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Information"),
                                commonFormCtrl.textAreaForm({ field: this.model.descriptionField })))),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("label", { class: 'label' }, "Gender"),
                            m("div", { class: "form-group" },
                                commonFormCtrl.radioForm({ field: this.model.genderField }, 'Male'),
                                commonFormCtrl.radioForm({ field: this.model.genderField }, 'Female')))),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("label", { class: 'label' }, "ZIGZAG \uC815\uBCF4\uB97C \uBC1B\uC544\uBCF4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
                            m("div", { class: "form-group" },
                                commonFormCtrl.checkboxForm({ field: this.model.receiveInfoField }, 'Phone'),
                                commonFormCtrl.checkboxForm({ field: this.model.receiveInfoField }, 'Email')))),
                    m("hr", null),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("button", { class: 'btn btn-primary', id: 'userFormSubmitBtn', type: 'button', onclick: function (e) {
                                    e.preventDefault();
                                    var bool = commonFormCtrl.validateAll(_this.model);
                                    if (bool) {
                                        _this.methods().setModelDataIntoUser(_this.model);
                                        userModel.save(_this.user);
                                    }
                                } }, "Save")))))));
    }
};
//# sourceMappingURL=UserForm.js.map