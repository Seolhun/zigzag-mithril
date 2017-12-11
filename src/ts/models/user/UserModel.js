import m from 'mithril';
import { commonCtrl } from '../../common/CommonCtrl';
var Client = /** @class */ (function () {
    function Client() {
        this.id = null;
        this.nickname = null;
        this.email = null;
        this.password = null;
        this.birth = null;
        this.description = null;
        this.gender = null;
        this.styles = [];
        this.receiveInfo = [];
        this.privateAgree = false;
        this.serviceAgree = false;
        this.createdBy = null;
        this.createdDate = null;
        this.modifiedBy = null;
        this.modifiedDate = null;
    }
    return Client;
}());
var userModel = {
    list: [],
    storedUserList: [],
    current: new Client(),
    loadList: function () {
        userModel.storedUserList = userModel.getFromStroage('userList');
        if (userModel.storedUserList === null) {
            userModel.storedUserList = [];
        }
    },
    // Current User
    getByNickname: function (nickname) {
        var user = {};
        user = userModel.getFromStroage(nickname);
        if (user === null) {
            return user;
        }
        return user;
    },
    save: function (user) {
        userModel.storedUserList.push(user);
        userModel.saveIntoStorageOne(user);
        userModel.saveIntoStorageList(userModel.storedUserList);
        alert('Hello, ' + user.nickname + ' Welcome to ZIGZAG!!! :)');
        m.route.set('/' + user.nickname);
    },
    removeFromStroage: function (key) {
        commonCtrl.removeFromList(userModel.storedUserList, key);
        if (confirm('Do yo wanna ' + key + ' user delete?')) {
            userModel.saveIntoStorageList(userModel.storedUserList);
            localStorage.removeItem(key);
            alert(key + ' user is deleted.');
            m.route.set('/list');
        }
    },
    getFromStroage: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    saveIntoStorageList: function (userList) {
        localStorage.setItem('userList', JSON.stringify(userList));
    },
    saveIntoStorageOne: function (one) {
        localStorage.setItem(one.nickname, JSON.stringify(one));
    }
};
export { Client, userModel };
//# sourceMappingURL=UserModel.js.map