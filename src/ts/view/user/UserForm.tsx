import m from 'mithril'
import localStyle from '../../../assets/scss/user/user.scss'
import {Client, userModel} from '../../models/user/UserModel'
import stream from 'mithril/stream'
import {commonCtrl} from '../../common/CommonCtrl'
import {commonFormCtrl} from '../../common/commonFormCtrl'


const userFormModel = {
  emailField: {
    type: 'email',
    value: stream(''),
    placeholder: 'Email ',
    errorMsg: '',
    validate(): boolean {
      let bool = commonCtrl.isNull(this.emailField.value())
      this.emailField.errorMsg = bool ? '' : 'Require a Email'
      return bool
    }
  },
  nicknameField: {
    type: 'text',
    value: stream(''),
    placeholder: 'Nickname',
    errorMsg: '',
    validate(): boolean {
      let bool = commonCtrl.isNickname(this.nicknameField.value())
      this.nicknameField.errorMsg = bool ? '' : 'Enter a only digits and alphabets'
      return this.errorMsg.length === 0
    }
  },
  passwordField: {
    type: 'password',
    value: stream(''),
    placeholder: 'Password',
    errorMsg: '',
    validate(): boolean {
      if (commonCtrl.isNull(this.passwordField.value())) {
        this.nicknameField.errorMsg = 'Require a Password'
      } else {
        if (this.rePasswordField.value() !== '') {
          this.passwordField.errorMsg = this.passwordField.value() === this.rePasswordField.value() ? '' : 'Enter a password, such as Re-Password.'
        }
      }
      return this.errorMsg.length === 0
    }
  },
  rePasswordField: {
    type: 'password',
    value: stream(''),
    placeholder: 'Re-Password',
    errorMsg: '',
    validate(): boolean {
      if (commonCtrl.isNull(this.rePasswordField.value())) {
        this.nicknameField.errorMsg = 'Require a Password'
      } else {
        if (this.passwordField.value() !== '') {
          this.rePasswordField.errorMsg = this.rePasswordField.value() === this.passwordField.value() ? '' : 'Enter a Re-password, such as Password.'
        }
      }
      return this.errorMsg.length === 0
    }
  },
  birthField: {
    value: stream(''),
    placeholder: 'Birth Day',
    errorMsg: '',
    validate(): boolean {
      this.birthField.errorMsg = this.birthField.value().length > 5 ? 'Expected no more than 5 characters' : ''
      return this.errorMsg.length === 0
    }
  },
  genderField: {
    type: 'radio',
    name: 'gender',
    value: stream(''),
    placeholder: 'Gender',
    errorMsg: '',
    validate(): boolean {
      let bool = commonCtrl.isNull(this.genderField.value())
      this.genderField.errorMsg = bool ? '' : 'Require a Email'
      return bool
    }
  },

  profileField: {
    type: 'text',
    value: stream(''),
    placeholder: 'Profile',
    errorMsg: '',
    validate(): boolean {
      let bool = commonCtrl.isNull(this.genderField.value())
      this.genderField.errorMsg = bool ? '' : 'Require a Email'
      return bool
    }
  },

  receiveInfoField: {
    type: 'checkbox',
    value: stream([]),
    placeholder: 'Received Information',
    errorMsg: '',
    validate(): boolean {
      let bool = commonCtrl.isNull(this.genderField.value())
      this.genderField.errorMsg = bool ? '' : 'Require a Email'
      return bool
    }
  }
}

//--------------------------------------------
export const UserForm = {
  data() {
    const user: Client = new Client

    return {
      'user': user
    }
  },

  methods(): Object {
    const isNicknameDuplicated = function (nickname: string): boolean {
      let user = userModel.getFromStroage(nickname)
      return user !== null
    }

    return {
      'isNicknameDuplicated': isNicknameDuplicated
    }
  },

  view() {
    return (
      <div>
        <div class={'container'}>
          {/*ServiceAgree Component*/}
          <div id={'serviceAgree'}>

          </div>
          {/*User Register Form*/}
          <form
            id={'userForm'}
            class={localStyle.userForm}
            onsubmit={(e: Event) => {
              e.preventDefault()
            }}
          >
            <div class={'row'}>
              <div class={'col-sm-8 col-sm-offset-2'}>
                {/* Email */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Email
                  </label>
                  {
                    commonFormCtrl.inputForm({field: userFormModel.emailField})
                  }
                </div>

                {/* Nickname */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Nickname
                  </label>
                  {
                    commonFormCtrl.inputForm({field: userFormModel.nicknameField})
                  }
                </div>

                {/* Password */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Password
                  </label>
                  {
                    commonFormCtrl.inputForm({field: userFormModel.passwordField})
                  }
                </div>

                {/* Re-Password */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Re-Password
                  </label>
                  {
                    commonFormCtrl.inputForm({field: userFormModel.rePasswordField})
                  }
                </div>

                {/* Age */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Birth
                  </label>
                  {
                    commonFormCtrl.inputForm({field: userFormModel.birthField})
                  }
                </div>

                {/* Information */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Information
                  </label>
                  {
                    commonFormCtrl.textAreaForm({field: userFormModel.profileField})
                  }
                </div>
              </div>
            </div>

            {/* 성별 부분 */}
            <div class={'row'}>
              <div class={'col-sm-8 col-sm-offset-2'}>
                <label
                  class={'label'}
                >
                  Gender
                </label>
                <div class="form-group">
                  {
                    commonFormCtrl.checkboxForm({field: userFormModel.genderField}, 'Male')
                  }
                  {
                    commonFormCtrl.checkboxForm({field: userFormModel.genderField}, 'Female')
                  }
                </div>
              </div>
            </div>

            <div class={'row'}>
              <div class={'col-sm-8 col-sm-offset-2'}>
                <label
                  class={'label'}
                >
                  ZIGZAG 정보를 받아보시겠습니까?
                </label>
                <div class="form-group">
                  {
                    commonFormCtrl.checkboxForm({field: userFormModel.receiveInfoField}, 'Phone')
                  }
                  {
                    commonFormCtrl.checkboxForm({field: userFormModel.receiveInfoField}, 'Email')
                  }
                </div>
              </div>
            </div>

            <hr/>
            <div class={'row'}>
              <div class={'col-sm-8 col-sm-offset-2'}>
                <button
                  class={'btn btn-primary'}
                  id={'userFormSubmitBtn'}
                  type={'button'}
                  onclick={(e: Event) => {
                    e.preventDefault()
                    if (commonFormCtrl.validateAll(userFormModel)) {
                      userModel.save(this.data().user)
                    }
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


