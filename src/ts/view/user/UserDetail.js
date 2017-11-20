import m from 'mithril';
import { userModel } from '../../models/user/UserModel';
export default {
    oninit(vnode) {
        userModel.getById(Number(userModel.current.id));
    },
    view() {
        return (m("div", { class: 'row' },
            m("div", { class: 'col-sm-8 col-sm-offset-2' },
                m("div", { class: "panel panel-default" },
                    m("div", { class: "panel-heading" },
                        m("h4", null, "Your Data")),
                    m("div", { class: "panel-body" },
                        m("p", null,
                            "E-Mail: ",
                            userModel.current.email),
                        m("p", null,
                            "Password: ",
                            userModel.current.password),
                        m("p", null,
                            "Birth: ",
                            userModel.current.birth),
                        m("p", null,
                            "Sex: ",
                            userModel.current.sex),
                        m("p", { style: "white-space: pre" },
                            "Information: ",
                            userModel.current.description),
                        m("p", null, "Send Mail?"),
                        m("ul", null,
                            m("li", null,
                                m("span", null, userModel.current.receiveInfo))),
                        m("p", null,
                            "Service Agreement: ",
                            userModel.current.serviceAgree,
                            " "),
                        m("p", null,
                            "Private Agreement: ",
                            userModel.current.privateAgree,
                            " "))))));
    }
};
//# sourceMappingURL=UserDetail.js.map