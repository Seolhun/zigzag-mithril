import m from 'mithril'
import 'ts/router/Router'
import 'assets/scss/global.scss'
import {headerComponent} from 'ts/components/layout/Header'
import {userModel} from 'ts/models/user/UserModel'

export enum PatternType {
  Nickname = 0,
  Alphabet = 1,
  Digit = 2
}

// Common
const commonCtrl = {
  nicknamePattern: new RegExp('^[A-Za-z0-9]{4,20}$'),
  alphabetPattern: new RegExp('^[A-z]*$'),
  digitPattern: new RegExp('^[0-9]*$'),

  isValidPattern(value: string, patternType: PatternType): boolean {
    switch (patternType) {
      case PatternType.Nickname:
        return this.isNickname(value)
      case PatternType.Alphabet:
        return this.isAlphabet(value)
      case PatternType.Digit:
        return this.isDigit(value)
      default:
        alert('올바른 패턴타입을 골라주세요')
    }
  },

  removeFromList(list, removedValue): void {
    list.splice(list.indexOf(removedValue), 1)
  },

  //True is Null
  isNull(value): boolean {
    let bool = value === null
    if (bool) {
      alert('아무것도 입력하시지 않았습니다.\n꼭 값을 입력해주세요.')
      return bool
    }
    return bool
  },

  // True가 적합.
  isNickname(value: string): boolean {
    if (this.isNull(value)) {
      return false
    }
    return this.nicknamePattern.test(value)
  },

  // True가 적합.
  isAlphabet(value: string): boolean {
    if (this.isNull(value)) {
      return false
    }
    return this.alphabetPattern.test(value).test()
  },

  // True가 적합.
  isDigit(value: string): boolean {
    if (this.isNull(value)) {
      return false
    }
    return this.digitPattern.test(value)
  }
}

class Zigzag implements m.ClassComponent<{}> {
  oninit() {
    userModel.loadList()
  }

  view() {
    return (
      <div class={'container'}>
        <div class={'row'}>
          <div
            class={'col-sm-12'}
          >
            {
              userModel.list.map(function (user) {
                return (
                  <a
                    class={'user-list-item'}
                    href={'/' + user.nickname}
                    oncreate={m.route.link}
                  >
                    {user.email + ' ' + user.nickname}
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

// Components
m.mount(document.getElementById('header'), headerComponent)
m.mount(document.getElementById('zigzag'), Zigzag)

export {commonCtrl}
