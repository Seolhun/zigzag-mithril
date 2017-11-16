import * as m from 'mithril'
import './router/route'
import './assets/scss/global.scss'

// import styles = require('./assets/scss/user/user.scss')
import * as styles from './assets/scss/user/user.scss'

// let Stream = require('mithril/stream')

class App implements m.ClassComponent<{}> {
  view() {
    return <div class={styles.message}>Hello Mithril with JSX</div>
  }
}

// Components
// let MyComponent = require('./components/mycomponent')

// m.mount(document.getElementById('sub-main'), MyComponent)
m.mount(document.getElementById('app'), App)
m.render(document.getElementById('hello'), 'Hello Mithril.js')
