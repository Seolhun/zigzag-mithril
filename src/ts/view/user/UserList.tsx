import m from 'mithril'
import {userModel, User} from 'models/user/UserModel'

export default {
  oninit() {
    return (
      userModel.loadList()
    )
  },

  onupdate() {
    console.log('updated')
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
              userModel.storedUserList.map(function (user) {
                return (
                  <a
                    class={'user-list-item'}
                    href={'/' + user.nickname}
                    oncreate={m.route.link}
                  >
                    {user.email + ' ' + user.nickname}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
} as m.Component<User, {}>
