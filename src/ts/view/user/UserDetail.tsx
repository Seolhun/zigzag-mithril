import m from 'mithril'
import {User, userModel} from 'models/user/UserModel'

//Private Methods. Never export this object.
const _userDetailCtrl = {
  isDetail() {
    return !(m.route.get().includes('registration') || m.route.get().includes('edit'))
  },

  isShowEditBtn() {
    if (this.isDetail()) {
      return (
        <button
          class={'btn btn-info'}
          href={'/' + userModel.current.nickname + '/edit'}
          oncreate={m.route.link}
        >
          Edit
        </button>
      )
    }
  }
}

export default {
  oninit(vnode) {
    if (_userDetailCtrl.isDetail()) {
      userModel.getByNickname(vnode.attrs.nickname)
    }
  },

  view() {
    return (
      <div class={'row'}>
        <div class={'col-sm-8 col-sm-offset-2'}>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4>Your Data</h4>
            </div>
            <div class="panel-body">
              <p>E-Mail: {userModel.current.email}</p>
              <p>Nickname: {userModel.current.nickname}</p>
              <p>Password: {userModel.current.password}</p>
              <p>Birth: {userModel.current.birth}</p>
              <p>Sex: {userModel.current.sex}</p>
              <p style="white-space: pre">
                Information: {userModel.current.description}
              </p>
              <p>How to received Information</p>
              <ul>
                {
                  userModel.current.receiveInfo.map(function (value) {
                    return (
                      <li>
                        {value}
                      </li>
                    )
                  })
                }
              </ul>
              <p>Service Agreement: {userModel.current.serviceAgree} </p>
              <p>Private Agreement: {userModel.current.privateAgree} </p>
            </div>
          </div>
        </div>
        <div class={'col-sm-8 col-sm-offset-2'}>
          {
            _userDetailCtrl.isShowEditBtn()
          }
        </div>
      </div>
    )
  }
} as m.Component<User, {}>

