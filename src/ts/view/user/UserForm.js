import m from 'mithril';
// import 'assets/scss/user/user.scss'
import localStyle from 'assets/scss/user/user.scss';
import { userModel } from 'models/user/UserModel';
import UserDetail from 'view/user/UserDetail';
import { serviceAgreement } from 'components/agree/ServiceAgreement';
export default {
    oninit(vnode) {
        if (m.route.get().includes('registration')) {
            userModel.current = {};
        }
    },
    // Dom 생성시 Edit인지 가입인지 확인하여 처리하기
    oncreate() {
        m.mount(document.getElementById('userDetail'), UserDetail);
        if (m.route.get().includes('registration')) {
            m.mount(document.getElementById('service-agree'), serviceAgreement);
            document.getElementById('user-form').style.display = 'none';
            document.getElementById('service-agree').style.display = 'block';
        }
        else {
            document.getElementById('user-form').style.display = 'block';
        }
    },
    // 회원가입시 서비스 등록여부 확ㅇ니하기
    onupdate() {
        // Changed window when all agreed
        if (m.route.get().includes('registration')) {
            if (serviceAgreement.isAllAgree && serviceAgreement.isSubmit) {
                document.getElementById('user-form').style.display = 'block';
                document.getElementById('service-agree').style.display = 'none';
            }
            else {
                document.getElementById('user-form').style.display = 'none';
                document.getElementById('service-agree').style.display = 'block';
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
                            m("input", { class: 'form-control', placeholder: 'Email', oninput: m.withAttr('value', value => {
                                    userModel.current.email = value;
                                }), value: userModel.current.email })),
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
                                    }) }),
                                "Male"),
                            m("label", { for: "female", class: 'label' },
                                m("input", { type: "radio", name: 'gender', value: 'Femail', onchange: m.withAttr('value', value => {
                                        userModel.current.sex = value;
                                    }) }),
                                "Female")))),
                m("div", { class: 'row' },
                    m("div", { class: 'col-sm-8 col-sm-offset-2' },
                        m("label", { class: 'label' }, "ZIGZAG \uC815\uBCF4\uB97C \uBC1B\uC544\uBCF4\uC2DC\uACA0\uC2B5\uB2C8\uAE4C"),
                        m("div", { class: "form-group" },
                            m("label", { for: "phone", class: 'label' },
                                m("input", { type: "checkbox", id: "sendmail", value: "Phone", onchange: m.withAttr('value', value => {
                                        console.log(value);
                                        userModel.current.receiveInfo = value;
                                    }) }),
                                "Phone"),
                            m("label", { for: "email", class: 'label' },
                                m("input", { type: "checkbox", id: "sendInfomail", value: "Email", onchange: m.withAttr('value', value => {
                                        userModel.current.receiveInfo = value;
                                    }) }),
                                "Email")))),
                m("hr", null),
                m("div", { class: 'row' },
                    m("div", { class: 'col-sm-8 col-sm-offset-2' },
                        m("button", { class: 'btn btn-primary', type: 'submit' }, "Save"))),
                m("hr", null),
                m("div", { id: 'userDetail' }))));
    }
};
//# sourceMappingURL=UserForm.js.map