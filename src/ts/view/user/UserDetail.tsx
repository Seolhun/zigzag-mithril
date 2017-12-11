import m from 'mithril'
import {Client, userModel} from '../../models/user/UserModel'

export const UserDetail = {
  user: Client,

  oninit(vnode) {
    this.user = {} as Client
    if (_userDetailCtrl.isDetail()) {
      this.user = userModel.getByNickname(vnode.attrs.nickname)
    }
  },

  view() {
    return (
      <div class={'container'}>
        <div class={'row'}>
          <div class={'col-sm-8 col-sm-offset-2'}>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4>Your Data</h4>
              </div>
              {
                _userDetailCtrl.showDetailData(this.user)
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//Private Methods. Never export this object.
const _userDetailCtrl = {
  isDetail() {
    return !(m.route.get().indexOf('registration') !== -1)
  },

  showDeleteBtn(user) {
    if (this.isDetail()) {
      return (
        <div>
          <button
            class={'btn btn-danger'}
            onclick={m.withAttr('value', () => {
              userModel.removeFromStroage(user.nickname)
            })}
          >
            Delete
          </button>
        </div>
      )
    }
  },

  showDetailData(user) {
    return (
      <div class="panel-body">
        <p>E-Mail: {user.email}</p>
        <p>Nickname: {user.nickname}</p>
        <p>Password: {user.password}</p>
        <p>Birth: {user.birth}</p>
        <p>Gender: {user.gender}</p>
        <p style="white-space: pre">
          Information: {user.description}
        </p>
        <p>How to received Information</p>
        <ul>
          {user.receiveInfo.length < 1 ?
            <li>Nothing want.</li> : user.receiveInfo.map(function (value) {
              return (
                <li>
                  {value}
                </li>
              )
            })
          }
        </ul>
        <p>Service Agreement: {user.serviceAgree} </p>
        <p>Private Agreement: {user.privateAgree} </p>
        {
          _userDetailCtrl.showDeleteBtn(user)
        }
      </div>
    )
  }
}


