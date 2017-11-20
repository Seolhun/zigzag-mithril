import m from 'mithril'
// import 'assets/scss/user/user.scss'
import localStyle from 'assets/scss/user/user.scss'
import {User, userModel} from 'models/user/UserModel'
import UserDetail from 'view/user/UserDetail'
import {serviceAgreement} from 'components/agree/ServiceAgreement'

export default {
  oninit(vnode) {
    if (m.route.get().includes('registration')) {
      userModel.current = {} as User
    }
  },

  // Dom 생성시 Edit인지 가입인지 확인하여 처리하기
  oncreate() {
    m.mount(document.getElementById('userDetail'), UserDetail)
    if (m.route.get().includes('registration')) {
      m.mount(document.getElementById('service-agree'), serviceAgreement)
      document.getElementById('user-form').style.display = 'none'
      document.getElementById('service-agree').style.display = 'block'
    } else {
      document.getElementById('user-form').style.display = 'block'
    }
  },

  // 회원가입시 서비스 등록여부 확ㅇ니하기
  onupdate() {
    // Changed window when all agreed
    if (m.route.get().includes('registration')) {
      if (serviceAgreement.isAllAgree && serviceAgreement.isSubmit) {
        document.getElementById('user-form').style.display = 'block'
        document.getElementById('service-agree').style.display = 'none'
      } else {
        document.getElementById('user-form').style.display = 'none'
        document.getElementById('service-agree').style.display = 'block'
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
                  class={'form-control'}
                  placeholder={'Email'}
                  oninput={m.withAttr('value', value => {
                    userModel.current.email = value
                  })}
                  value={userModel.current.email}
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
                    value={'Femail'}
                    onchange={m.withAttr('value', value => {
                      userModel.current.sex = value
                    })}
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
                    id="sendmail"
                    value="Phone"
                    onchange={m.withAttr('value', value => {
                      console.log(value)
                      userModel.current.receiveInfo = value
                    })}
                  />
                  Phone
                </label>
                <label
                  for="email"
                  class={'label'}
                >
                  <input
                    type="checkbox"
                    id="sendInfomail"
                    value="Email"
                    onchange={m.withAttr('value', value => {
                      userModel.current.receiveInfo = value
                    })}
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


