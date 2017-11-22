import m from 'mithril'
import localStyle from 'assets/scss/user/user.scss'
import {User, userModel} from 'models/user/UserModel'

const _userListCtrl = {
  getList() {
    if (userModel.storedUserList.length < 1) {
      return (
        <h4>등록된 유저가 없습니다. 유저를 등록해주세요.</h4>
      )
    }
    return (
      <table class="table">
        <thead>
        <tr>
          <th>Email</th>
          <th>Nickname</th>
          <th>Brith</th>
          <th>How to receive</th>
        </tr>
        </thead>
        <tbody>
        {
          userModel.storedUserList.map(function (user) {
            return (
              <tr
                class={localStyle.userListItem}
                href={'/' + user.nickname}
                oncreate={m.route.link}
              >
                <td>
                  {user.email}
                </td>
                <td>
                  {user.nickname}
                </td>
                <td>
                  {user.birth}
                </td>
                <td>
                  {
                    user.receiveInfo
                  }
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }
}

export default {
  oninit() {
    return (
      userModel.loadList()
    )
  },

  view() {
    return (
      <div class={'container'}>
        <div class={'row'}>
          <div class={'col-sm-12'}>
            <button
              class={'btn btn-primary'}
              href="/registration"
              oncreate={m.route.link}
            >
              User Add
            </button>
          </div>
          <div class={'col-sm-12'}>
            {
              _userListCtrl.getList()
            }
          </div>
        </div>
      </div>
    )
  }
} as m.Component<User, {}>
