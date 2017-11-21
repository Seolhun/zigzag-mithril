import m from 'mithril';
import { userModel } from 'models/user/UserModel';
//Private Methods. Never export this object.
const _userDetailCtrl = {
    isDetail() {
        return !(m.route.get().includes('registration') || m.route.get().includes('edit'));
    },
    isShowEditBtn() {
        if (this.isDetail()) {
            return (m("button", { class: 'btn btn-info', href: '/' + userModel.current.nickname + '/edit', oncreate: m.route.link }, "Edit"));
        }
    }
};
export default {
    oninit(vnode) {
        if (_userDetailCtrl.isDetail()) {
            userModel.getByNickname(vnode.attrs.nickname);
        }
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
                            "Nickname: ",
                            userModel.current.nickname),
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
                        m("p", null, "How to received Information"),
                        m("ul", null, userModel.current.receiveInfo.map(function (value) {
                            return (m("li", null, value));
                        })),
                        m("p", null,
                            "Service Agreement: ",
                            userModel.current.serviceAgree,
                            " "),
                        m("p", null,
                            "Private Agreement: ",
                            userModel.current.privateAgree,
                            " ")))),
            m("div", { class: 'col-sm-8 col-sm-offset-2' }, _userDetailCtrl.isShowEditBtn())));
    }
};
//# sourceMappingURL=UserDetail.js.map