import m from 'mithril'
// import 'assets/scss/user/user.scss'
import localStyle from 'assets/scss/user/user.scss'
import {User, userModel} from 'models/user/UserModel'
import {serviceAgreementComponent} from 'components/agree/ServiceAgreement'

import UserDetail from 'view/user/UserDetail'

//Private Methods. Never export this object.
const _userFromCtrl = {
  isRegister() {
    return m.route.get().includes('registration')
  },

  isChecked(value) {
    // userModel.current.receiveInfo != null && userModel.current.receiveInfo.indexOf('Email') !== -1
    if (!this.isRegister()) {
      return userModel.current.receiveInfo.indexOf(value) !== -1
    }
  },

  putOrRemove(checked, value) {
    if (checked) {
      userModel.current.receiveInfo.push(value)
    } else {
      userModel.current.receiveInfo.splice(userModel.current.receiveInfo.indexOf(value), 1)
    }
  },

  showOnlyService() {
    document.getElementById('user-form').style.display = 'none'
    document.getElementById('service-agree').style.display = 'block'
  },

  showOnlyUserForm() {
    document.getElementById('user-form').style.display = 'block'
    document.getElementById('service-agree').style.display = 'none'
  }
}

//Main View
export default {
  oninit(vnode) {
    if (_userFromCtrl.isRegister()) {
      userModel.current = {} as User
      userModel.current.receiveInfo = []
    } else {
      userModel.getByNickname(vnode.attrs.nickname)
    }
  },

  // Is Edit or Join
  oncreate(vnode) {
    m.mount(document.getElementById('userDetail'), UserDetail)
    if (_userFromCtrl.isRegister()) {
      m.mount(document.getElementById('service-agree'), serviceAgreementComponent)
      _userFromCtrl.showOnlyService()
    } else {
      _userFromCtrl.showOnlyUserForm()
    }
  },

  // Is Agree about our Service?
  onupdate() {
    // Changed window when all agreed
    if (_userFromCtrl.isRegister()) {
      if (serviceAgreementComponent.isAllAgree && serviceAgreementComponent.isSubmit) {
        _userFromCtrl.showOnlyUserForm()
      } else {
        _userFromCtrl.showOnlyService()
      }
    }
  },

  view() {
    return (
      <div class={'container'}>
        {/*ServiceAgree Component*/}
        <div id={'service-agree'}>

        </div>
        {/*User Register Form*/}
        <form
          id={'user-form'}
          class={localStyle.userForm}
          onsubmit={(e: Event) => {
            e.preventDefault()
            userModel.save()
          }}
        >
          <div class={'row'}>
            <div class={'col-sm-8 col-sm-offset-2'}>
              {/* Email */}
              <div class={'form-group'}>
                <label class={'label'}>
                  Email
                </label>
                <input
                  type={'email'}
                  class={'form-control'}
                  placeholder={'Email'}
                  oninput={m.withAttr('value', value => {
                    userModel.current.email = value
                  })}
                  value={userModel.current.email}
                />
              </div>

              {/* Email */}
              <div class={'form-group'}>
                <label class={'label'}>
                  Nickname
                </label>
                <input
                  class={'form-control'}
                  placeholder={'Nickname'}
                  oninput={m.withAttr('value', value => {
                    userModel.current.nickname = value
                  })}
                  value={userModel.current.nickname}
                />
              </div>

              {/* Password */}
              <div class={'form-group'}>
                <label class={'label'}>
                  Password
                </label>
                <input
                  type={'password'}
                  class={'form-control'}
                  placeholder={'Password'}
                  oninput={m.withAttr('value', value => {
                    userModel.current.password = value
                  })}
                  value={userModel.current.password}
                />
              </div>

              {/* Age */}
              <div class={'form-group'}>
                <label class={'label'}>
                  Birth
                </label>
                <input
                  type={'date'}
                  class={'form-control'}
                  placeholder={'Birth'}
                  oninput={m.withAttr('value', value => {
                    userModel.current.birth = value
                  })}
                  value={userModel.current.birth}
                />
              </div>

              {/* Information */}
              <div class={'form-group'}>
                <label class={'label'}>
                  Information
                </label>
                <textarea
                  class={'form-control'}
                  placeholder={'Description about you'}
                  oninput={m.withAttr('value', value => {
                    userModel.current.description = value
                  })}
                  value={userModel.current.description}
                >
                </textarea>
              </div>
            </div>
          </div>

          {/* 성별 부분 */}
          <div class={'row'}>
            <div class={'col-sm-8 col-sm-offset-2'}>
              <div class="form-group">
                <label
                  for="male"
                  class={'label'}
                >
                  <input
                    type="radio"
                    name={'gender'}
                    id="male"
                    value={'Male'}
                    onchange={m.withAttr('value', value => {
                      userModel.current.sex = value
                    })}
                    checked={userModel.current.sex === 'Male'}
                  />
                  Male
                </label>
                <label
                  for="female"
                  class={'label'}
                >
                  <input
                    type="radio"
                    name={'gender'}
                    value={'Female'}
                    onchange={m.withAttr('value', value => {
                      userModel.current.sex = value
                    })}
                    checked={userModel.current.sex === 'Female'}
                  />
                  Female
                </label>
              </div>
            </div>
          </div>

          <div class={'row'}>
            <div class={'col-sm-8 col-sm-offset-2'}>
              <label class={'label'}>
                ZIGZAG 정보를 받아보시겠습니까
              </label>
              <div class="form-group">
                <label
                  for="phone"
                  class={'label'}
                >
                  <input
                    type="checkbox"
                    value="Phone"
                    onchange={m.withAttr('checked', checked => {
                      _userFromCtrl.putOrRemove(checked, 'Phone')
                    })}
                    checked={_userFromCtrl.isChecked('Phone')}
                  />
                  Phone
                </label>
                <label
                  for="email"
                  class={'label'}
                >
                  <input
                    type="checkbox"
                    value="Email"
                    onchange={m.withAttr('checked', checked => {
                      _userFromCtrl.putOrRemove(checked, 'Email')
                    })}
                    checked={_userFromCtrl.isChecked('Email')}
                  />
                  Email
                </label>
              </div>
            </div>
          </div>

          <hr/>
          <div class={'row'}>
            <div class={'col-sm-8 col-sm-offset-2'}>
              <button
                class={'btn btn-primary'}
                type={'submit'}
                onsubmit={(e: Event) => {
                  e.preventDefault()
                  userModel.save()
                }}
              >
                Save
              </button>
            </div>
          </div>

          {/* Result Information */}
          <hr/>
          <div id={'userDetail'}>

          </div>
        </form>
      </div>
    )
  }
} as m.Component<User, {}>


