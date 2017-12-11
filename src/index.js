import m from 'mithril';
import 'ts/router/Router';
import 'assets/scss/global.scss';
import { headerComponent } from 'ts/components/layout/Header';
import { userModel } from 'ts/models/user/UserModel';
var Zigzag = /** @class */ (function () {
    function Zigzag() {
    }
    Zigzag.prototype.oninit = function () {
        userModel.loadList();
    };
    Zigzag.prototype.view = function () {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-12' }, userModel.list.map(function (user) {
                    return (m("a", { class: 'user-list-item', href: '/' + user.nickname, oncreate: m.route.link }, user.email + ' ' + user.nickname));
                })))));
    };
    return Zigzag;
}());
// Components
m.mount(document.getElementById('header'), headerComponent);
m.mount(document.getElementById('zigzag'), Zigzag);
//# sourceMappingURL=index.js.map