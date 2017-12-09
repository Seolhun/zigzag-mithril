import m from 'mithril';
import localStyle from '../../../assets/scss/user/user.scss';
import { Client, userModel } from '../../models/user/UserModel';
import { commonCtrl } from '../../../index';
import stream from 'mithril/stream';
//--------------------------------------------
//Private Methods. Never export this object.
var _userFormCtrl = {
    validateAll: function (model) {
        Object.keys(model).forEach(function (field) {
            return model[field].validate();
        });
    },
    putOrRemove: function (checked, value) {
        if (checked) {
            userModel.current.receiveInfo.push(value);
        }
        else {
            commonCtrl.removeFromList(userModel.current.receiveInfo, value);
        }
    },
    isNicknameDuplicated: function (nickname) {
        var user = userModel.getFromStroage(nickname);
        return user !== null;
    }
};
var ValidatedInput = {
    view: function (_a) {
        var attrs = _a.attrs;
        return (m("div", null,
            m("input", { type: "text", value: attrs.field.value(), className: attrs.field.error ? 'error' : '', oninput: m.withAttr('value', attrs.field.value) }),
            m("p", { class: 'isError' }, attrs.field.error)));
    }
};
//Main View
export var userForm = {
    userModel: function () {
        var model = {
            longField: {
                value: stream(''),
                error: '',
                validate: function () {
                    model.longField.error =
                        model.longField.value().length < 10 ?
                            'Expected at least 10 characters' : '';
                }
            },
            shortField: {
                value: stream(''),
                error: '',
                validate: function () {
                    model.shortField.error =
                        model.shortField.value().length > 5 ?
                            'Expected no more than 5 characters' : '';
                }
            }
        };
        return model;
    },
    Form: function () {
        var model = userForm.userModel();
        return {
            view: function () {
                return (m('form', {
                    onsubmit: function (event) {
                        event.preventDefault();
                        _userFormCtrl.validateAll(model);
                    }
                }, m('p', 'At least 10 characters:'), m(ValidatedInput, { field: model.longField }), m('p', 'No more than 5 characters:'), m(ValidatedInput, { field: model.shortField }), m('hr'), m('button[type=submit]', 'Validate')));
            }
        };
    },
    oninit: function (vnode) {
        //receiveInfo를 []로 이용해주지 않으면 에러가 있음. interface 문제인지 널일시 function값이 들어가는 현상
        if (_userFormCtrl.isRegister()) {
            userModel.current = new Client;
            userModel.current.receiveInfo = [];
        }
        else {
            userModel.getByNickname(vnode.attrs.nickname);
        }
    },
    view: function (vnode) {
        console.log('vnode1', vnode);
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
                                m("input", { type: 'email', class: 'form-control', placeholder: 'Email', oninput: m.withAttr('value', function (value) {
                                        userModel.current.email = value;
                                        if (commonCtrl.isNull(value)) {
                                            document.getElementById('emailError').innerText = '올바른 이메일 형식이 아닙니다.';
                                            document.getElementById('emailError').style.display = 'block';
                                            userForm.isEmail = false;
                                            return;
                                        }
                                        document.getElementById('emailError').style.display = 'none';
                                        userForm.isEmail = true;
                                    }), value: userModel.current.email }),
                                m("p", { id: 'emailError' })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Nickname"),
                                m("input", { name: 'nickname', class: 'form-control', placeholder: 'Nickname', oninput: m.withAttr('value', function (value) {
                                        userModel.current.nickname = value;
                                        if (_userFormCtrl.isNicknameDuplicated(value)) {
                                            document.getElementById('nicknameError').innerText = '중복된 닉네임입니다.';
                                            document.getElementById('nicknameError').style.display = 'block';
                                            userForm.isNickname = false;
                                            return;
                                        }
                                        else if (!commonCtrl.isNickname(value)) {
                                            document.getElementById('nicknameError').innerText = '닉네임은 영어,숫자와 4~20글자만 가능합니다.';
                                            document.getElementById('nicknameError').style.display = 'block';
                                            userForm.isNickname = false;
                                            return;
                                        }
                                        document.getElementById('nicknameError').style.display = 'none';
                                        userForm.isNickname = true;
                                        console.log('userForm.isNickname', userForm.isNickname);
                                    }), value: userModel.current.nickname }),
                                m("p", { class: 'isError', id: 'nicknameError' })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Password"),
                                m("input", { type: 'password', class: 'form-control', placeholder: 'Password', oninput: m.withAttr('value', function (value) {
                                        userModel.current.password = value;
                                        if (userForm.password2.length > 0) {
                                            if (userForm.password2 !== value) {
                                                document.getElementById('rePasswordError').innerText = '비밀번호가 재입력 비밀번호와 같지 않습니다.';
                                                document.getElementById('rePasswordError').style.display = 'block';
                                                userForm.isPassword = false;
                                                return;
                                            }
                                        }
                                        document.getElementById('rePasswordError').style.display = 'none';
                                        userForm.isPassword = true;
                                    }), value: userModel.current.password })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Re-Password"),
                                m("input", { type: 'password', class: 'form-control', placeholder: 'Re-Password', oninput: m.withAttr('value', function (value) {
                                        userForm.password2 = value;
                                        if (userModel.current.password !== value) {
                                            document.getElementById('rePasswordError').innerText = '재입력 비밀번호가 올바르지 않습니다.';
                                            document.getElementById('rePasswordError').style.display = 'block';
                                            userForm.isPassword2 = false;
                                            return;
                                        }
                                        document.getElementById('rePasswordError').style.display = 'none';
                                        userForm.isPassword2 = true;
                                    }) }),
                                m("p", { class: 'isError', id: 'rePasswordError' })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Birth"),
                                m("input", { type: 'date', class: 'form-control', placeholder: 'Birth', oninput: m.withAttr('value', function (value) {
                                        userModel.current.birth = value;
                                    }), value: userModel.current.birth })),
                            m("div", { class: 'form-group' },
                                m("label", { class: 'label' }, "Information"),
                                m("textarea", { class: 'form-control', placeholder: 'Description about you', oninput: m.withAttr('value', function (value) {
                                        userModel.current.description = value;
                                    }), value: userModel.current.description })))),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("div", { class: "form-group" },
                                m("label", { for: "genderMale", class: 'label' },
                                    m("input", { type: "radio", name: 'gender', id: "genderMale", value: 'Male', onchange: m.withAttr('value', function (value) {
                                            userModel.current.sex = value;
                                            userForm.isSex = true;
                                        }), checked: userModel.current.sex === 'Male' }),
                                    "Male"),
                                m("label", { for: "genderFemail", class: 'label' },
                                    m("input", { type: "radio", name: 'gender', id: "genderFemail", value: 'Female', onchange: m.withAttr('value', function (value) {
                                            userModel.current.sex = value;
                                            userForm.isSex = true;
                                        }), checked: userModel.current.sex === 'Female' }),
                                    "Female")))),
                    m("div", { class: 'row' },
                        m("div", { class: 'col-sm-8 col-sm-offset-2' },
                            m("label", { class: 'label' }, "ZIGZAG \uC815\uBCF4\uB97C \uBC1B\uC544\uBCF4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
                            m("div", { class: "form-group" },
                                m("label", { for: 'phoneCheckbox', class: 'label' },
                                    m("input", { type: "checkbox", value: "Phone", id: 'phoneCheckbox', onchange: m.withAttr('checked', function (checked) {
                                            _userFormCtrl.putOrRemove(checked, 'Phone');
                                        }), checked: _userFormCtrl.isChecked('Phone') }),
                                    "Phone"),
                                m("label", { for: 'emailCheckbox', class: 'label' },
                                    m("input", { type: "checkbox", id: 'emailCheckbox', value: "Email", onchange: m.withAttr('checked', function (checked) {
                                            _userFormCtrl.putOrRemove(checked, 'Email');
                                        }), checked: _userFormCtrl.isChecked('Email') }),
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