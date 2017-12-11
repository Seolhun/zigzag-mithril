import m from 'mithril'
import stream from 'mithril/stream'
import localStyle from '../../../assets/scss/user/user.scss'
import {Client, userModel} from '../../models/user/UserModel'
import {commonCtrl} from '../../common/CommonCtrl'
import {commonFormCtrl} from '../../common/commonFormCtrl'

function userForm() {
  const userFormModel = {
    nicknameField: {
      type: 'text',
      value: stream(''),
      placeholder: 'Nickname',
      errorMsg: '',
      validate(): boolean {
        let bool = commonCtrl.isNickname(this.value())
        this.errorMsg = bool ?
          UserForm.methods().isNicknameDuplicated(userFormModel.nicknameField.value()) ? '' : 'Already this nickname is registered.'
          : 'Enter a 4~20 characters and Use digits and alphabets'
        return this.errorMsg.length === 0
      }
    },
    emailField: {
      type: 'email',
      value: stream(''),
      placeholder: 'Email ',
      errorMsg: '',
      validate(): boolean {
        let bool = this.value().length < 1
        this.errorMsg = bool ? 'Require a Email' : ''
        return this.errorMsg.length === 0
      }
    },
    passwordField: {
      type: 'password',
      value: stream(''),
      placeholder: 'Password',
      errorMsg: '',
      validate(): boolean {
        if (this.value().length < 1) {
          this.errorMsg = 'Require a Password'
        } else {
          if (userFormModel.rePasswordField.value().length > 1) {
            let isSame = this.value() === userFormModel.rePasswordField.value()
            this.errorMsg = isSame ? '' : 'Enter a password, such as Re-Password.'
            userFormModel.rePasswordField.errorMsg = isSame ? '' : 'Enter a Re-password, such as Password.'
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
        if (this.value().length < 1) {
          this.errorMsg = 'Require a Password'
        } else {
          if (userFormModel.passwordField.value().length > 1) {
            let isSame = this.value() === userFormModel.passwordField.value()
            this.errorMsg = isSame ? '' : 'Enter a password, such as Password.'
            userFormModel.passwordField.errorMsg = isSame ? '' : 'Enter a Re-password, such as Re-Password.'
          }
        }
        return this.errorMsg.length === 0
      }
    },
    birthField: {
      type: 'date',
      value: stream(''),
      placeholder: 'Birth Day',
      errorMsg: '',
      validate(): boolean {
        let bool = this.value().length < 1
        this.errorMsg = bool ? 'Require a Birth date' : ''
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
        let bool = this.value().length < 1
        this.errorMsg = bool ? 'Require a Gender' : ''
        return this.errorMsg.length === 0
      }
    },

    descriptionField: {
      type: 'text',
      value: stream(''),
      placeholder: 'Profile',
      errorMsg: '',
      validate(): boolean {
        let bool = this.value().length < 1
        this.errorMsg = bool ? 'Require a Profile' : ''
        return this.errorMsg.length === 0
      }
    },

    receiveInfoField: {
      type: 'checkbox',
      value: stream([]),
      placeholder: 'Received Information',
      errorMsg: '',
      validate(): boolean {
        return true
      }
    }
  }
  return userFormModel
}

export const UserForm = {
  model: Function,
  user: Client,

  oninit() {
    this.user = new Client()
    this.model = userForm()
  },

  methods() {
    const isNicknameDuplicated = (nickname: string): boolean => {
      let user = userModel.getFromStroage(nickname)
      return user === null
    }

    const setModelDataIntoUser = (userFormModel): void => {
      this.user.email = userFormModel.emailField.value()
      this.user.nickname = userFormModel.nicknameField.value()
      this.user.password = userFormModel.passwordField.value()
      this.user.birth = userFormModel.birthField.value()
      this.user.description = userFormModel.descriptionField.value()
      this.user.gender = userFormModel.genderField.value()
      this.user.receiveInfo = userFormModel.receiveInfoField.value()
    }

    return {
      'isNicknameDuplicated': isNicknameDuplicated,
      'setModelDataIntoUser': setModelDataIntoUser
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
                {/* Nickname */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Nickname
                  </label>
                  {
                    commonFormCtrl.inputForm({field: this.model.nicknameField})
                  }
                </div>

                {/* Email */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Email
                  </label>
                  {
                    commonFormCtrl.inputForm({field: this.model.emailField})
                  }
                </div>

                {/* Password */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Password
                  </label>
                  {
                    commonFormCtrl.inputForm({field: this.model.passwordField})
                  }
                </div>

                {/* Re-Password */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Re-Password
                  </label>
                  {
                    commonFormCtrl.inputForm({field: this.model.rePasswordField})
                  }
                </div>

                {/* Age */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Birth
                  </label>
                  {
                    commonFormCtrl.inputForm({field: this.model.birthField})
                  }
                </div>

                {/* Information */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Information
                  </label>
                  {
                    commonFormCtrl.textAreaForm({field: this.model.descriptionField})
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
                    commonFormCtrl.radioForm({field: this.model.genderField}, 'Male')
                  }
                  {
                    commonFormCtrl.radioForm({field: this.model.genderField}, 'Female')
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
                    commonFormCtrl.checkboxForm({field: this.model.receiveInfoField}, 'Phone')
                  }
                  {
                    commonFormCtrl.checkboxForm({field: this.model.receiveInfoField}, 'Email')
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
                    let bool = commonFormCtrl.validateAll(this.model)
                    if (bool) {
                      this.methods().setModelDataIntoUser(this.model)
                      userModel.save(this.user)
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


