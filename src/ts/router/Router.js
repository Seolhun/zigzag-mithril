import m from 'mithril';
import UserDetail from '../view/user/UserDetail';
import Root from '../view/Root';
import UserList from '../view/user/UserList';
import UserForm from '../view/user/UserForm';
/**
 * @Referenece : https://mithril.js.org/route.html;
 * */
m.route(document.getElementById('router-view'), '/', {
    '/': {
        render() {
            return m(Root);
        }
    },
    '/list': UserList,
    '/detail/:name': {
        render(vnode) {
            return m(UserDetail, vnode.attrs);
        }
    },
    '/edit/:id': {
        render(vnode) {
            return m(UserForm, vnode.attrs);
        }
    },
    '/registration': {
        render(vnode) {
            return m(UserForm, vnode.attrs);
        }
    }
});
//# sourceMappingURL=Router.js.map