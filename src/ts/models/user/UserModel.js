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
        this.receiveInfo = [];
        this.styles = [];
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
        userModel.current = userModel.getFromStroage(nickname);
        if (userModel.current === null) {
            userModel.current = new Client();
        }
    },
    save: function (user) {
        userModel.storedUserList.push(user);
        userModel.setIntoStorageOne();
        userModel.setIntoStorageList(userModel.storedUserList);
        alert(user.nickname + '님 ZIGZAG에 오신것을 환영합니다.');
        m.route.set('/' + user.nickname);
    },
    removeFromStroage: function (key) {
        commonCtrl.removeFromList(userModel.storedUserList, key);
        if (confirm('삭제하시겠습니까?')) {
            userModel.setIntoStorageList(userModel.storedUserList);
            localStorage.removeItem(key);
            alert(key + '님이 정상적으로 삭제되었습니다.');
            m.route.set('/list');
        }
    },
    getFromStroage: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    setIntoStorageList: function (userList) {
        localStorage.setItem('userList', JSON.stringify(userList));
    },
    setIntoStorageOne: function () {
        localStorage.setItem(userModel.current.nickname, JSON.stringify(userModel.current));
    }
};
export { Client, userModel };
//# sourceMappingURL=UserModel.js.map