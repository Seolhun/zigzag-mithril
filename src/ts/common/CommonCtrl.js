export var PatternType;
(function (PatternType) {
    PatternType[PatternType["Nickname"] = 0] = "Nickname";
    PatternType[PatternType["Alphabet"] = 1] = "Alphabet";
    PatternType[PatternType["Digit"] = 2] = "Digit";
})(PatternType || (PatternType = {}));
// Common
export var commonCtrl = {
    nicknamePattern: new RegExp('^[A-Za-z0-9]{4,20}$'),
    alphabetPattern: new RegExp('^[A-z]*$'),
    digitPattern: new RegExp('^[0-9]*$'),
    isValidPattern: function (value, patternType) {
        switch (patternType) {
            case PatternType.Nickname:
                return this.isNickname(value);
            case PatternType.Alphabet:
                return this.isAlphabet(value);
            case PatternType.Digit:
                return this.isDigit(value);
            default:
                alert('올바른 패턴타입을 골라주세요');
        }
    },
    removeFromList: function (list, removedValue) {
        list.splice(list.indexOf(removedValue), 1);
    },
    //True is Null
    isNull: function (value) {
        return value === null;
    },
    // True가 적합.
    isNickname: function (value) {
        if (this.isNull(value)) {
            return false;
        }
        return this.nicknamePattern.test(value);
    },
    // True가 적합.
    isAlphabet: function (value) {
        if (this.isNull(value)) {
            return false;
        }
        return this.alphabetPattern.test(value).test();
    },
    // True가 적합.
    isDigit: function (value) {
        if (this.isNull(value)) {
            return false;
        }
        return this.digitPattern.test(value);
    }
};
//# sourceMappingURL=CommonCtrl.js.map