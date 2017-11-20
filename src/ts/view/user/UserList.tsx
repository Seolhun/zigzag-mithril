import m from 'mithril'
import {userModel} from '../../models/user/UserModel'

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
              userModel.list.map(function (user) {
                return (
                  <a
                    class={'user-list-item'}
                    href={'/edit/' + user.id}
                    oncreate={m.route.link}
                  >
                    {user.email + ' ' + user.createdDate}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
} as m.Component<{User}, {}>
