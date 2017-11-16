let m = require('mithril')

// Router Component
let UserList = require('../view/UserList')
let UserForm = require('../view/UserForm')

// setup routes to start w/ the `#` symbol
m.route.mode = 'hash'

let Router = m.route(document.getElementById('router-view'), '/list', {
  '/list': UserList,
  '/edit/:id': UserForm
})

module.exports = Router
