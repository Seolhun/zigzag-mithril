import m from 'mithril';
import Root from 'view/Root';
import UserList from 'view/user/UserList';
import { userForm } from 'view/user/UserForm';
import UserDetail from 'view/user/UserDetail';
/**
 * @Referenece : https://mithril.js.org/route.html;
 * */
m.route(document.getElementById('router-view'), '/', {
    '/': {
        onmatch: function () {
            return Root;
        },
    },
    // Join To us
    '/registration': userForm,
    // User Detail
    '/:nickname': {
        render: function (vnode) {
            if (vnode.attrs.nickname === 'list') {
                return m(UserList, vnode.attrs);
            }
            else {
                return m(UserDetail, vnode.attrs);
            }
        }
    }
});
//# sourceMappingURL=Router.js.map