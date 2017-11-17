import * as m from 'mithril'
import Root from '../view/Root'
import UserList from '../view/user/UserList'
import UserForm from '../view/user/UserForm'
import SignIn from '../view/user/SignIn'

m.route(document.getElementById('router-view'), '/', {
  '/': {
    render() {
      return m(Root)
    }
  },
  '/list': {
    render() {
      return m(UserList)
    }
  },
  '/edit/:id': {
    render(vnode) {
      return m(UserForm, vnode.attrs)
    }
  },
  '/join': {
    render() {
      return m(SignIn)
    }
  }
})
