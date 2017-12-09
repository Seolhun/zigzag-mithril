import m from 'mithril'
import localStyle from '../../../assets/scss/user/user.scss'
import {userModel} from '../../models/user/UserModel'
import stream from 'mithril/stream'

//--------------------------------------------
//Private Methods. Never export this object.
const userFormCtrl = {
  validateAll(model) {
    Object.keys(model).forEach((field) =>
      model[field].validate())
  },

  isNicknameDuplicated(nickname: string): boolean {
    let user = userModel.getFromStroage(nickname)
    return user !== null
  },

  inputForm(attrs) {
    return (
      <div>
        <input
          type={attrs.field.type}
          value={attrs.field.value()}
          placeholder={attrs.field.placeholder}
          className={attrs.field.error ? 'error' : ''}
          class={'form-control'}
          id={attrs.field.id}
          oninput={
            m.withAttr('value', attrs.field.value)
          }
        />
        <p
          class={'isError'}
        >
          {attrs.field.errorMsg}
        </p>
      </div>
    )
  },

  textAreaForm(attrs) {
    return (
      <div>
        <textarea
          value={attrs.field.value()}
          placeholder={attrs.field.placeholder}
          className={attrs.field.error ? 'error' : ''}
          class="form-control"
          oninput={
            m.withAttr('value', attrs.field.value)
          }
        >
        </textarea>
        <p
          class={'isError'}
        >
          {attrs.field.error}
        </p>
      </div>
    )
  }
}

const userFormModel = {
  emailField: {
    type: 'email',
    value: stream(''),
    placeholder: 'Email',
    errorMsg: '',
    validate() {
      this.emailField.errorMsg =
        this.emailField.value().length < 10 ? 'Expected at least 10 characters' : ''
    }
  },
  nicknameField: {
    type: 'text',
    value: stream(''),
    placeholder: 'Nickanme',
    errorMsg: '',
    validate() {
      this.nicknameField.errorMsg =
        this.nicknameField.value().length > 5 ? 'Expected no more than 5 characters' : ''
    }
  },
  passwordField: {
    type: 'password',
    value: stream(''),
    placeholder: 'Password',
    errorMsg: '',
    validate() {
      this.passwordField.errorMsg =
        this.passwordField.value().length > 5 ? 'Expected no more than 5 characters' : ''
    }
  },
  rePasswordField: {
    type: 'password',
    value: stream(''),
    placeholder: 'Re-Password',
    errorMsg: '',
    validate() {
      this.rePasswordField.errorMsg =
        this.rePasswordField.value().length > 5 ?
          'Expected no more than 5 characters' : ''
    }
  },
  birthField: {
    value: stream(''),
    placeholder: 'Birth Day',
    errorMsg: '',
    validate() {
      this.birthField.errorMsg =
        this.birthField.value().length > 5 ?
          'Expected no more than 5 characters' : ''
    }
  },
  profileField: {
    type: 'text',
    value: stream(''),
    placeholder: 'Profile',
    errorMsg: '',
    validate() {
      this.profileField.errorMsg =
        this.profileField.value().length > 5 ?
          'Expected no more than 5 characters' : ''
    }
  },
  genderField: {
    type: 'radio',
    value: stream(''),
    placeholder: 'Gender',
    errorMsg: '',
    validate() {
      this.genderField.errorMsg =
        this.genderField.value().length > 5 ?
          'Expected no more than 5 characters' : ''
    }
  },

  receiveField: {
    type: 'checkbox',
    value: stream(''),
    placeholder: 'Received Information',
    errorMsg: '',
    validate() {
      this.receiveField.errorMsg = this.receiveField.value().length > 5 ? 'Expected no more than 5 characters' : ''
    }
  }
}

//Main View
export const UserForm = {
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
                  {
                    userFormCtrl.inputForm({field: userFormModel.emailField})
                  }
                </div>

                {/* Nickname */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Nickname
                  </label>
                  {
                    userFormCtrl.inputForm({field: userFormModel.nicknameField})
                  }
                </div>

                {/* Password */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Password
                  </label>
                  {
                    userFormCtrl.inputForm({field: userFormModel.passwordField})
                  }
                </div>

                {/* Re-Password */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Re-Password
                  </label>
                  {
                    userFormCtrl.inputForm({field: userFormModel.rePasswordField})
                  }
                </div>

                {/* Age */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Birth
                  </label>
                  {
                    userFormCtrl.inputForm({field: userFormModel.birthField})
                  }
                </div>

                {/* Information */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Information
                  </label>
                  {
                    userFormCtrl.textAreaForm({field: userFormModel.profileField})
                  }
                </div>
              </div>
            </div>

            {/* 성별 부분 */}
            <div class={'row'}>
              <div class={'col-sm-8 col-sm-offset-2'}>
                <div class="form-group">
                  <label
                    for="genderMale"
                    class={'label'}
                  >
                    <input
                      type="radio"
                      name={'gender'}
                      id="genderMale"
                      value={'Male'}
                      onchange={m.withAttr('value', value => {
                        userModel.current.sex = value
                      })}
                      checked={userModel.current.sex === 'Male'}
                    />
                    Male
                  </label>
                  <label
                    for="genderFemail"
                    class={'label'}
                  >
                    <input
                      type="radio"
                      name={'gender'}
                      id="genderFemail"
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
                <label
                  class={'label'}
                >
                  ZIGZAG 정보를 받아보시겠습니까?
                </label>
                <div class="form-group">
                  <label
                    for={'phoneCheckbox'}
                    class={'label'}
                  >
                    <input
                      type="checkbox"
                      value="Phone"
                      id={'phoneCheckbox'}
                      onchange={m.withAttr('checked', checked => {
                        userFormCtrl.putOrRemove(checked, 'Phone')
                      })}
                    />
                    Phone
                  </label>
                  <label
                    for={'emailCheckbox'}
                    class={'label'}
                  >
                    <input
                      type="checkbox"
                      id={'emailCheckbox'}
                      value="Email"
                      onchange={m.withAttr('checked', checked => {
                        userFormCtrl.putOrRemove(checked, 'Email')
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
                  id={'userFormSubmitBtn'}
                  type={'button'}
                  onclick={(e: Event) => {
                    e.preventDefault()
                    userModel.save()
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


