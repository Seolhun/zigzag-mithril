import m from 'mithril';
import { commonCtrl } from '../../../index';
var userModel = {
    list: [],
    storedUserList: [],
    isValid: function () {
        // Interface?
        console.log(userModel.current.email);
        if (userModel.current.email === undefined) {
            alert('이메일을 입력해주세요.');
            return true;
        }
        else if (!commonCtrl.isNickname(userModel.current.nickname)) {
            alert('닉네임 값이 올바르지 않습니다.');
            return true;
        }
        else if (userModel.current.password === undefined) {
            alert('비밀번호를 입력해주세요.');
            return true;
        }
        else if (userModel.current.sex === undefined) {
            alert('성별을 골라주세요');
            return true;
        }
        else if (userModel.current.styles === undefined) {
            userModel.current.styles = [];
        }
        else if (userModel.current.receiveInfo === undefined) {
            userModel.current.receiveInfo = [];
        }
        return false;
    },
    loadList: function () {
        userModel.storedUserList = userModel.getFromStroage('userList');
        if (userModel.storedUserList === null) {
            userModel.storedUserList = [];
        }
        //----------API Call Examples----------
        // return m.request<{ data: User[] }>({
        //   method: 'GET',
        //   url: 'https://rem-rest-api.herokuapp.com/api/users',
        //   withCredentials: true
        // }).then(result => {
        //   userModel.list = result.data
        // })
    },
    // Current User
    current: {},
    getByNickname: function (nickname) {
        userModel.current = userModel.getFromStroage(nickname);
        if (userModel.current === null) {
            userModel.current = {};
        }
        //----------API Call Examples----------
        // return m.request<User>({
        //   method: 'GET',
        //   url: 'https://rem-rest-api.herokuapp.com/api/users/' + nickname,
        //   withCredentials: true
        // }).then(result => {
        //   userModel.current = result
        // })
    },
    save: function () {
        //UserForm Validation
        if (this.isValid()) {
            return;
        }
        userModel.storedUserList.push(userModel.current);
        userModel.setIntoStorageOne();
        userModel.setIntoStorageList();
        alert(userModel.current.nickname + '님 ZIGZAG에 오신것을 환영합니다.');
        m.route.set('/' + userModel.current.nickname);
        userModel.current = {};
        //----------API Call Examples----------
        // return m.request({
        //   method: 'PUT',
        //   url: 'https://rem-rest-api.herokuapp.com/api/users/' + userModel.current.id,
        //   data: userModel.current,
        //   withCredentials: true
        // })
    },
    removeFromStroage: function (key) {
        commonCtrl.removeFromList(userModel.storedUserList, key);
        if (confirm("삭제하시겠습니까?")) {
            userModel.setIntoStorageList();
            localStorage.removeItem(key);
            alert(key + '님이 정상적으로 삭제되었습니다.');
            m.route.set('/list');
        }
    },
    getFromStroage: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    setIntoStorageList: function () {
        localStorage.setItem('userList', JSON.stringify(userModel.storedUserList));
    },
    setIntoStorageOne: function () {
        localStorage.setItem(userModel.current.nickname, JSON.stringify(userModel.current));
    }
};
export { userModel };
//# sourceMappingURL=UserModel.js.map