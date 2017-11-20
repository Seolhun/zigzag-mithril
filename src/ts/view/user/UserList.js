import m from 'mithril';
import { userModel } from '../../models/user/UserModel';
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
                m("div", { class: 'col-sm-12' }, userModel.list.map(function (user) {
                    return (m("a", { class: 'user-list-item', href: '/edit/' + user.id, oncreate: m.route.link }, user.email + ' ' + user.createdDate));
                })))));
    }
};
//# sourceMappingURL=UserList.js.map