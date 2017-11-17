// import {Stream} from 'mithril/stream'
import * as m from 'mithril'
import * as styles from 'assets/scss/user/user.scss'
// const num = stream(1);
// const text = stream<string>();
// let s: Stream<User>;
// s = stream(new User());

export default {
  view() {
    return (
      <div class="container">
        <div class="row">
          <h1 class={styles.message}>Welcome to Sign in ZIGZAG</h1>
          <div class="col-sm-12">
            <label>Email
              <input class="form-control"/>
            </label>
          </div>
          <div class="col-sm-12">
            <label>Password
              <input
                class="form-control"
                type="password"
              />
            </label>
          </div>
        </div>
      </div>
    )
  }
} as m.Component<{}, {}>

