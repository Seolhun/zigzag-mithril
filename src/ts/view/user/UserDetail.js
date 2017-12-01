import m from 'mithril';
import { userModel } from '../../models/user/UserModel';
//Private Methods. Never export this object.
var _userDetailCtrl = {
    isDetail: function () {
        return !(m.route.get().indexOf('registration') !== -1);
    },
    showDeleteBtn: function () {
        if (this.isDetail()) {
            return (m("div", null,
                m("button", { class: 'btn btn-danger', onclick: m.withAttr('value', function () {
                        userModel.removeFromStroage(userModel.current.nickname);
                    }) }, "Delete")));
        }
    },
    showDetailData: function () {
        return (m("div", { class: "panel-body" },
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
            m("ul", null, userModel.current.receiveInfo.length < 1 ?
                m("li", null, "Nothing want.") : userModel.current.receiveInfo.map(function (value) {
                return (m("li", null, value));
            })),
            m("p", null,
                "Service Agreement: ",
                userModel.current.serviceAgree,
                " "),
            m("p", null,
                "Private Agreement: ",
                userModel.current.privateAgree,
                " "),
            _userDetailCtrl.showDeleteBtn()));
    },
};
export default {
    oninit: function (vnode) {
        if (_userDetailCtrl.isDetail()) {
            userModel.getByNickname(vnode.attrs.nickname);
        }
    },
    view: function () {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-8 col-sm-offset-2' },
                    m("div", { class: "panel panel-default" },
                        m("div", { class: "panel-heading" },
                            m("h4", null, "Your Data")),
                        _userDetailCtrl.showDetailData())))));
    }
};
//# sourceMappingURL=UserDetail.js.map