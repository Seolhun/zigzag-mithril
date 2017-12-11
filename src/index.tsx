import m from 'mithril'
import 'ts/router/Router'
import 'assets/scss/global.scss'
import {headerComponent} from 'ts/components/layout/Header'
import {userModel} from 'ts/models/user/UserModel'

class Zigzag implements m.ClassComponent<{}> {
  oninit() {
    userModel.loadList()
  }

  view() {
    return (
      <div class={'container'}>
        <div class={'row'}>
          <div
            class={'col-sm-12'}
          >
            {
              userModel.list.map(function (user) {
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
}

// Components
m.mount(document.getElementById('header'), headerComponent)
m.mount(document.getElementById('zigzag'), Zigzag)
