import * as m from 'mithril'
import userModel from '../../models/UserModel'

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
            {
              userModel.list.map(function (user) {
                return (
                  <a
                    class={'user-list-item'}
                    href={'/edit/' + user.id}
                    oncreate={m.route.link}
                  >
                    {user.firstName + ' ' + user.lastName}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
} as m.Component<{}, {}>
