import m from 'mithril'
import {Client, userModel} from '../../models/user/UserModel'

//Private Methods. Never export this object.
const _userDetailCtrl = {
  isDetail() {
    return !(m.route.get().indexOf('registration') !== -1)
  },

  showDeleteBtn() {
    if (this.isDetail()) {
      return (
        <div>
          <button
            class={'btn btn-danger'}
            onclick={m.withAttr('value', () => {
              userModel.removeFromStroage(userModel.current.nickname)
            })}
          >
            Delete
          </button>
        </div>
      )
    }
  },

  showDetailData() {
    return (
      <div class="panel-body">
        <p>E-Mail: {userModel.current.email}</p>
        <p>Nickname: {userModel.current.nickname}</p>
        <p>Password: {userModel.current.password}</p>
        <p>Birth: {userModel.current.birth}</p>
        <p>Gender: {userModel.current.gender}</p>
        <p style="white-space: pre">
          Information: {userModel.current.description}
        </p>
        <p>How to received Information</p>
        <ul>
          {userModel.current.receiveInfo.length < 1 ?
            <li>Nothing want.</li> : userModel.current.receiveInfo.map(function (value) {
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
        {
          _userDetailCtrl.showDeleteBtn()
        }
      </div>
    )
  },
}

export default {
  oninit(vnode) {
    if (_userDetailCtrl.isDetail()) {
      userModel.getByNickname(vnode.attrs.nickname)
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
                _userDetailCtrl.showDetailData()
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
} as m.Component<Client, {}>

