import m from 'mithril';
const userModel = {
    searchUserList: [],
    storedUserList: [],
    loadList() {
        userModel.storedUserList = userModel.getFromStrage('userList');
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
    getByNickname(nickname) {
        userModel.current = userModel.getFromStrage(nickname);
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
    save() {
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
    getFromStrage(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    setIntoStorageList() {
        localStorage.setItem('userList', JSON.stringify(userModel.storedUserList));
    },
    setIntoStorageOne() {
        localStorage.setItem(userModel.current.nickname, JSON.stringify(userModel.current));
    }
};
export { userModel };
//# sourceMappingURL=UserModel.js.map