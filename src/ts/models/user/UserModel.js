import m from 'mithril';
var ReceiveInformation;
(function (ReceiveInformation) {
    ReceiveInformation[ReceiveInformation["Email"] = 0] = "Email";
    ReceiveInformation[ReceiveInformation["Phone"] = 1] = "Phone";
})(ReceiveInformation || (ReceiveInformation = {}));
const userModel = {
    list: [],
    loadList() {
        return m.request({
            method: 'GET',
            url: 'https://rem-rest-api.herokuapp.com/api/users',
            withCredentials: true
        }).then(result => {
            userModel.list = result.data;
        });
    },
    // Current User
    current: {},
    getById(id) {
        return m.request({
            method: 'GET',
            url: 'https://rem-rest-api.herokuapp.com/api/users/' + id,
            withCredentials: true
        }).then(result => {
            userModel.current = result;
        });
    },
    save() {
        return m.request({
            method: 'PUT',
            url: 'https://rem-rest-api.herokuapp.com/api/users/' + userModel.current.id,
            data: userModel.current,
            withCredentials: true
        });
    }
};
export { userModel };
//# sourceMappingURL=UserModel.js.map