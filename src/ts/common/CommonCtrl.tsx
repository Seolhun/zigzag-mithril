export enum PatternType {
  Nickname = 0,
  Alphabet = 1,
  Digit = 2
}

// Common
export const commonCtrl = {
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

  pushIntoListNotDuplication(list: Object[], value: string): void {
    if (list.indexOf(value) === -1) {
      list.push(value)
    } else {
      commonCtrl.removeFromList(list, value)
    }
  },

  removeFromList(list: Object[], value: string): void {
    list.splice(list.indexOf(value), 1)
  },

  //True is Null
  isNull(value): boolean {
    return value === null
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
