import m from 'mithril';
import 'ts/router/Router';
import 'assets/scss/global.scss';
import Header from 'ts/components/layout/Header';
class Zigzag {
    view() {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-12' }))));
    }
}
// Components
m.mount(document.getElementById('header'), Header);
m.mount(document.getElementById('zigzag'), Zigzag);
//# sourceMappingURL=index.js.map