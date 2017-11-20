import m from 'mithril'
import 'ts/router/Router'
import 'assets/scss/global.scss'
import Header from 'ts/components/layout/Header'

class Zigzag implements m.ClassComponent<{}> {
  view() {
    return (
      <div class={'container'}>
        <div class={'row'}>
          <div class={'col-sm-12'}>

          </div>
        </div>
      </div>
    )
  }
}

// Components
m.mount(document.getElementById('header'), Header)
m.mount(document.getElementById('zigzag'), Zigzag)
