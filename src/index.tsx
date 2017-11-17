import * as m from 'mithril'
import 'router/Router'
import 'assets/scss/global.scss'
import Header from 'components/layout/Header'

class Zigzag implements m.ClassComponent<{}> {
  view() {
    return (
      <div class={'container'}>
        <div class={'row'}>
          <div class={'col-sm-12'}>
          <h1>ZIGZAG app using mithril.js</h1>
          <p>Local Css</p>
          </div>
        </div>
      </div>
    )
  }
}

// Components
m.mount(document.getElementById('header'), Header)
m.mount(document.getElementById('zigzag'), Zigzag)
