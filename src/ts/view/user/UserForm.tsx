import m from 'mithril'
import localStyle from '../../../assets/scss/user/user.scss'
import {Client, userModel} from '../../models/user/UserModel'
import {commonCtrl} from '../../../index'
import stream from 'mithril/stream'

//--------------------------------------------
//Private Methods. Never export this object.
const _userFormCtrl = {
  validateAll(model) {
    Object.keys(model).forEach((field) =>
      model[field].validate())
  },

  putOrRemove(checked: boolean, value): void {
    if (checked) {
      userModel.current.receiveInfo.push(value)
    } else {
      commonCtrl.removeFromList(userModel.current.receiveInfo, value)
    }
  },

  isNicknameDuplicated(nickname): boolean {
    let user = userModel.getFromStroage(nickname)
    return user !== null
  }
}

const ValidatedInput = {
  view({attrs}) {
    return (
      <div>
        <input
          type="text"
          value={attrs.field.value()}
          className={attrs.field.error ? 'error' : ''}
          oninput={
            m.withAttr('value', attrs.field.value)
          }
        />
        <p class={'isError'}>{attrs.field.error}</p>
      </div>
    )
  }
}

//Main View
export const userForm = {
  userModel() {
    const model = {
      longField: {
        value: stream(''),
        error: '',
        validate() {
          model.longField.error =
            model.longField.value().length < 10 ?
              'Expected at least 10 characters' : ''
        }
      },
      shortField: {
        value: stream(''),
        error: '',
        validate() {
          model.shortField.error =
            model.shortField.value().length > 5 ?
              'Expected no more than 5 characters' : ''
        }
      }
    }
    return model
  },

  Form() {
    const model = userForm.userModel()
    return {
      view() {
        return (
          m('form', {
              onsubmit(event) {
                event.preventDefault()
                _userFormCtrl.validateAll(model)
              }
            },
            m('p', 'At least 10 characters:'),
            m(ValidatedInput, {field: model.longField}),
            m('p', 'No more than 5 characters:'),
            m(ValidatedInput, {field: model.shortField}),
            m('hr'),
            m('button[type=submit]', 'Validate')
          )
        )
      }
    }
  },

  oninit(vnode) {
    //receiveInfo를 []로 이용해주지 않으면 에러가 있음. interface 문제인지 널일시 function값이 들어가는 현상
    if (_userFormCtrl.isRegister()) {
      userModel.current = new Client
      userModel.current.receiveInfo = []
    } else {
      userModel.getByNickname(vnode.attrs.nickname)
    }
  },

  view(vnode) {
    console.log('vnode1', vnode)
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
                  <input
                    type={'email'}
                    class={'form-control'}
                    placeholder={'Email'}
                    oninput={m.withAttr('value', value => {
                      userModel.current.email = value
                      if (commonCtrl.isNull(value)) {
                        document.getElementById('emailError').innerText = '올바른 이메일 형식이 아닙니다.'
                        document.getElementById('emailError').style.display = 'block'
                        userForm.isEmail = false
                        return
                      }
                      document.getElementById('emailError').style.display = 'none'
                      userForm.isEmail = true
                    })}
                    value={userModel.current.email}
                  />
                  <p
                    id={'emailError'}
                  >

                  </p>
                </div>

                {/* Nickname */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Nickname
                  </label>
                  <input
                    name={'nickname'}
                    class={'form-control'}
                    placeholder={'Nickname'}
                    oninput={m.withAttr('value', value => {
                      userModel.current.nickname = value
                      if (_userFormCtrl.isNicknameDuplicated(value)) {
                        document.getElementById('nicknameError').innerText = '중복된 닉네임입니다.'
                        document.getElementById('nicknameError').style.display = 'block'
                        userForm.isNickname = false
                        return
                      } else if (!commonCtrl.isNickname(value)) {
                        document.getElementById('nicknameError').innerText = '닉네임은 영어,숫자와 4~20글자만 가능합니다.'
                        document.getElementById('nicknameError').style.display = 'block'
                        userForm.isNickname = false
                        return
                      }
                      document.getElementById('nicknameError').style.display = 'none'
                      userForm.isNickname = true
                      console.log('userForm.isNickname', userForm.isNickname)
                    })}
                    value={userModel.current.nickname}
                  />
                  <p
                    class={'isError'}
                    id={'nicknameError'}
                  >
                  </p>
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
                      if (userForm.password2.length > 0) {
                        if (userForm.password2 !== value) {
                          document.getElementById('rePasswordError').innerText = '비밀번호가 재입력 비밀번호와 같지 않습니다.'
                          document.getElementById('rePasswordError').style.display = 'block'
                          userForm.isPassword = false
                          return
                        }
                      }
                      document.getElementById('rePasswordError').style.display = 'none'
                      userForm.isPassword = true
                    })}
                    value={userModel.current.password}
                  />
                </div>

                {/* Re-Password */}
                <div class={'form-group'}>
                  <label class={'label'}>
                    Re-Password
                  </label>
                  <input
                    type={'password'}
                    class={'form-control'}
                    placeholder={'Re-Password'}
                    oninput={m.withAttr('value', value => {
                      userForm.password2 = value
                      if (userModel.current.password !== value) {
                        document.getElementById('rePasswordError').innerText = '재입력 비밀번호가 올바르지 않습니다.'
                        document.getElementById('rePasswordError').style.display = 'block'
                        userForm.isPassword2 = false
                        return
                      }
                      document.getElementById('rePasswordError').style.display = 'none'
                      userForm.isPassword2 = true
                    })}
                  />
                  <p
                    class={'isError'}
                    id={'rePasswordError'}
                  >
                  </p>
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
                        userForm.isSex = true
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
                        userForm.isSex = true
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
                        _userFormCtrl.putOrRemove(checked, 'Phone')
                      })}
                      checked={_userFormCtrl.isChecked('Phone')}
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
                        _userFormCtrl.putOrRemove(checked, 'Email')
                      })}
                      checked={_userFormCtrl.isChecked('Email')}
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


