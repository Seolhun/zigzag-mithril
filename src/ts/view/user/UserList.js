import m from 'mithril';
import { userModel } from 'models/user/UserModel';
export default {
    oninit() {
        return (userModel.loadList());
    },
    onupdate() {
        console.log('updated');
    },
    view() {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-12' },
                    m("button", { class: 'btn btn-primary', href: "/registration", oncreate: m.route.link }, "User Add")),
                m("div", { class: 'col-sm-12' }, userModel.storedUserList.map(function (user) {
                    return (m("a", { class: 'user-list-item', href: '/' + user.nickname, oncreate: m.route.link }, user.email + ' ' + user.nickname));
                })))));
    }
};
//# sourceMappingURL=UserList.js.map