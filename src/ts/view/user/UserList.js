import m from 'mithril';
import localStyle from '../../../assets/scss/user/user.scss';
import { userModel } from '../../models/user/UserModel';
var _userListCtrl = {
    getList: function () {
        if (userModel.storedUserList.length < 1) {
            return (m("h4", null, "\uB4F1\uB85D\uB41C \uC720\uC800\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uC720\uC800\uB97C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694."));
        }
        return (m("table", { class: "table" },
            m("thead", null,
                m("tr", null,
                    m("th", null, "Email"),
                    m("th", null, "Nickname"),
                    m("th", null, "Brith"),
                    m("th", null, "How to receive"))),
            m("tbody", null, userModel.storedUserList.map(function (user) {
                return (m("tr", { class: localStyle.userListItem, href: '/' + user.nickname, oncreate: m.route.link },
                    m("td", null, user.email),
                    m("td", null, user.nickname),
                    m("td", null, user.birth),
                    m("td", null, user.receiveInfo)));
            }))));
    }
};
export default {
    oninit: function () {
        return (userModel.loadList());
    },
    view: function () {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-12' },
                    m("button", { class: 'btn btn-primary', href: "/registration", oncreate: m.route.link }, "User Add")),
                m("div", { class: 'col-sm-12' }, _userListCtrl.getList()))));
    }
};
//# sourceMappingURL=UserList.js.map