import m from 'mithril';
import 'ts/router/Router';
import 'assets/scss/global.scss';
import { headerComponent } from 'ts/components/layout/Header';
import { userModel } from 'ts/models/user/UserModel';
class Zigzag {
    oninit() {
        userModel.loadList();
    }
    view() {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-12' }, userModel.searchUserList.map(function (user) {
                    return (m("a", { class: 'user-list-item', href: '/' + user.nickname, oncreate: m.route.link }, user.email + ' ' + user.nickname));
                })))));
    }
}
// Components
m.mount(document.getElementById('header'), headerComponent);
m.mount(document.getElementById('zigzag'), Zigzag);
//# sourceMappingURL=index.js.map