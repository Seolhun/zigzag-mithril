import m from 'mithril';
import { Client, userModel } from '../../models/user/UserModel';
export var UserDetail = {
    user: Client,
    oninit: function (vnode) {
        this.user = {};
        if (_userDetailCtrl.isDetail()) {
            this.user = userModel.getByNickname(vnode.attrs.nickname);
        }
    },
    view: function () {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-8 col-sm-offset-2' },
                    m("div", { class: "panel panel-default" },
                        m("div", { class: "panel-heading" },
                            m("h4", null, "Your Data")),
                        _userDetailCtrl.showDetailData(this.user))))));
    }
};
//Private Methods. Never export this object.
var _userDetailCtrl = {
    isDetail: function () {
        return !(m.route.get().indexOf('registration') !== -1);
    },
    showDeleteBtn: function (user) {
        if (this.isDetail()) {
            return (m("div", null,
                m("button", { class: 'btn btn-danger', onclick: m.withAttr('value', function () {
                        userModel.removeFromStroage(user.nickname);
                    }) }, "Delete")));
        }
    },
    showDetailData: function (user) {
        return (m("div", { class: "panel-body" },
            m("p", null,
                "E-Mail: ",
                user.email),
            m("p", null,
                "Nickname: ",
                user.nickname),
            m("p", null,
                "Password: ",
                user.password),
            m("p", null,
                "Birth: ",
                user.birth),
            m("p", null,
                "Gender: ",
                user.gender),
            m("p", { style: "white-space: pre" },
                "Information: ",
                user.description),
            m("p", null, "How to received Information"),
            m("ul", null, user.receiveInfo.length < 1 ?
                m("li", null, "Nothing want.") : user.receiveInfo.map(function (value) {
                return (m("li", null, value));
            })),
            m("p", null,
                "Service Agreement: ",
                user.serviceAgree,
                " "),
            m("p", null,
                "Private Agreement: ",
                user.privateAgree,
                " "),
            _userDetailCtrl.showDeleteBtn(user)));
    }
};
//# sourceMappingURL=UserDetail.js.map