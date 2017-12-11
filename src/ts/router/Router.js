import m from 'mithril';
import Root from '../view/Root';
import { userModel } from '../models/user/UserModel';
import { UserList } from '../view/user/UserList';
import { UserForm } from '../view/user/UserForm';
import { UserDetail } from '../view/user/UserDetail';
/**
 * @Referenece : https://mithril.js.org/route.html;
 * */
m.route(document.getElementById('router-view'), '/', {
    '/': Root,
    // Join To us
    '/registration': UserForm,
    // User Detail
    '/:nickname': {
        onmatch: function (args) {
            console.log(args);
            var nickname = args.nickname;
            var user = userModel.getByNickname(nickname);
            if (nickname === 'list') {
                return UserList;
            }
            else if (user === null) {
                alert('Not found ' + nickname + ' user.');
                m.route.set('/list');
            }
            else {
                return UserDetail;
            }
        }
    }
});
//# sourceMappingURL=Router.js.map