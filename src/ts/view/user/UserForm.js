import m from 'mithril';
// import 'assets/scss/user/user.scss'
import localStyle from 'assets/scss/user/user.scss';
import { userModel } from 'models/user/UserModel';
import { serviceAgreementComponent } from 'components/agree/ServiceAgreement';
import UserDetail from 'view/user/UserDetail';
//Private Methods. Never export this object.
const _userFromCtrl = {
    isRegister() {
        return m.route.get().includes('registration');
    },
    isChecked(value) {
        // userModel.current.receiveInfo != null && userModel.current.receiveInfo.indexOf('Email') !== -1
        if (!this.isRegister()) {
            return userModel.current.receiveInfo.indexOf(value) !== -1;
        }
    },
    putOrRemove(checked, value) {
        if (checked) {
            userModel.current.receiveInfo.push(value);
        }
        else {
            userModel.current.receiveInfo.splice(userModel.current.receiveInfo.indexOf(value), 1);
        }
    },
    showOnlyService() {
        document.getElementById('user-form').style.display = 'none';
        document.getElementById('service-agree').style.display = 'block';
    },
    showOnlyUserForm() {
        document.getElementById('user-form').style.display = 'block';
        document.getElementById('service-agree').style.display = 'none';
    }
};
//Main View
export default {
    oninit(vnode) {
        if (_userFromCtrl.isRegister()) {
            userModel.current = {};
            userModel.current.receiveInfo = [];
        }
        else {
            userModel.getByNickname(vnode.attrs.nickname);
        }
    },
    // Is Edit or Join
    oncreate(vnode) {
        m.mount(document.getElementById('userDetail'), UserDetail);
        if (_userFromCtrl.isRegister()) {
            m.mount(document.getElementById('service-agree'), serviceAgreementComponent);
            _userFromCtrl.showOnlyService();
        }
        else {
            _userFromCtrl.showOnlyUserForm();
        }
    },
    // Is Agree about our Service?
    onupdate() {
        // Changed window when all agreed
        if (_userFromCtrl.isRegister()) {
            if (serviceAgreementComponent.isAllAgree && serviceAgreementComponent.isSubmit) {
                _userFromCtrl.showOnlyUserForm();
            }
            else {
                _userFromCtrl.showOnlyService();
            }
        }
    },
    view() {
        return (m("div", { class: 'container' },
            m("div", { id: 'service-agree' }),
            m("form", { id: 'user-form', class: localStyle.userForm, onsubmit: (e) => {
                    e.preventDefault();
                    userModel.save();
                } },
                m("div", { class: 'row' },
                    m("div", { class: 'col-sm-8 col-sm-offset-2' },
                        m("div", { class: 'form-group' },
                            m("label", { class: 'label' }, "Email"),
                            m("input", { type: 'email', class: 'form-control', placeholder: 'Email', oninput: m.withAttr('value', value => {
                                    userModel.current.email = value;
                                }), value: userModel.current.email })),
                        m("div", { class: 'form-group' },
                            m("label", { class: 'label' }, "Nickname"),
                            m("input", { class: 'form-control', placeholder: 'Nickname', oninput: m.withAttr('value', value => {
                                    userModel.current.nickname = value;
                                }), value: userModel.current.nickname })),
                        m("div", { class: 'form-group' },
                            m("label", { class: 'label' }, "Password"),
                            m("input", { type: 'password', class: 'form-control', placeholder: 'Password', oninput: m.withAttr('value', value => {
                                    userModel.current.password = value;
                                }), value: userModel.current.password })),
                        m("div", { class: 'form-group' },
                            m("label", { class: 'label' }, "Birth"),
                            m("input", { type: 'date', class: 'form-control', placeholder: 'Birth', oninput: m.withAttr('value', value => {
                                    userModel.current.birth = value;
                                }), value: userModel.current.birth })),
                        m("div", { class: 'form-group' },
                            m("label", { class: 'label' }, "Information"),
                            m("textarea", { class: 'form-control', placeholder: 'Description about you', oninput: m.withAttr('value', value => {
                                    userModel.current.description = value;
                                }), value: userModel.current.description })))),
                m("div", { class: 'row' },
                    m("div", { class: 'col-sm-8 col-sm-offset-2' },
                        m("div", { class: "form-group" },
                            m("label", { for: "male", class: 'label' },
                                m("input", { type: "radio", name: 'gender', id: "male", value: 'Male', onchange: m.withAttr('value', value => {
                                        userModel.current.sex = value;
                                    }), checked: userModel.current.sex === 'Male' }),
                                "Male"),
                            m("label", { for: "female", class: 'label' },
                                m("input", { type: "radio", name: 'gender', value: 'Female', onchange: m.withAttr('value', value => {
                                        userModel.current.sex = value;
                                    }), checked: userModel.current.sex === 'Female' }),
                                "Female")))),
                m("div", { class: 'row' },
                    m("div", { class: 'col-sm-8 col-sm-offset-2' },
                        m("label", { class: 'label' }, "ZIGZAG \uC815\uBCF4\uB97C \uBC1B\uC544\uBCF4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C"),
                        m("div", { class: "form-group" },
                            m("label", { for: "phone", class: 'label' },
                                m("input", { type: "checkbox", value: "Phone", onchange: m.withAttr('checked', checked => {
                                        _userFromCtrl.putOrRemove(checked, 'Phone');
                                    }), checked: _userFromCtrl.isChecked('Phone') }),
                                "Phone"),
                            m("label", { for: "email", class: 'label' },
                                m("input", { type: "checkbox", value: "Email", onchange: m.withAttr('checked', checked => {
                                        _userFromCtrl.putOrRemove(checked, 'Email');
                                    }), checked: _userFromCtrl.isChecked('Email') }),
                                "Email")))),
                m("hr", null),
                m("div", { class: 'row' },
                    m("div", { class: 'col-sm-8 col-sm-offset-2' },
                        m("button", { class: 'btn btn-primary', type: 'submit', onsubmit: (e) => {
                                e.preventDefault();
                                userModel.save();
                            } }, "Save"))),
                m("hr", null),
                m("div", { id: 'userDetail' }))));
    }
};
//# sourceMappingURL=UserForm.js.map