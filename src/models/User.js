// src/models/User.js
let m = require('mithril')

let User = {
  list: [],
  loadList: function () {
    return m.request({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users',
      withCredentials: true
    }).then(function (result) {
      User.list = result.data
    })
  },
  current: {},
  load: function (id) {
    return m.request({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users/' + id,
      withCredentials: true
    }).then(function (result) {
      User.current = result
    })
  }
}

module.exports = User
