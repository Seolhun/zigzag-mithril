import m from 'mithril'
import {userModel, User} from '../../models/user/UserModel'

export default {
  oninit(vnode) {
    userModel.getById(Number(userModel.current.id))
  },
  view() {
    return (
      <div class={'row'}>
        <div class={'col-sm-8 col-sm-offset-2'}>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4>Your Data</h4>
            </div>
            <div class="panel-body">
              <p>E-Mail: {userModel.current.email}</p>
              <p>Password: {userModel.current.password}</p>
              <p>Birth: {userModel.current.birth}</p>
              <p>Sex: {userModel.current.sex}</p>
              <p style="white-space: pre">
                Information: {userModel.current.description}
              </p>
              <p>Send Mail?</p>
              <ul>
                <li>
                    <span>
                      {userModel.current.receiveInfo}
                    </span>
                </li>
              </ul>
              <p>Service Agreement: {userModel.current.serviceAgree} </p>
              <p>Private Agreement: {userModel.current.privateAgree} </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
} as m.Component<User, {}>


