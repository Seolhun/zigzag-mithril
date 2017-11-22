import m from 'mithril';
import 'ts/router/Router';
import 'assets/scss/global.scss';
import { headerComponent } from 'ts/components/layout/Header';
import { userModel } from 'ts/models/user/UserModel';
export var PatternType;
(function (PatternType) {
    PatternType[PatternType["Nickname"] = 0] = "Nickname";
    PatternType[PatternType["Alphabet"] = 1] = "Alphabet";
    PatternType[PatternType["Digit"] = 2] = "Digit";
})(PatternType || (PatternType = {}));
// Common
var commonCtrl = {
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
        var bool = value === null;
        if (bool) {
            alert('아무것도 입력하시지 않았습니다.\n꼭 값을 입력해주세요.');
            return bool;
        }
        return bool;
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
var Zigzag = /** @class */ (function () {
    function Zigzag() {
    }
    Zigzag.prototype.oninit = function () {
        userModel.loadList();
    };
    Zigzag.prototype.view = function () {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-12' }, userModel.list.map(function (user) {
                    return (m("a", { class: 'user-list-item', href: '/' + user.nickname, oncreate: m.route.link }, user.email + ' ' + user.nickname));
                })))));
    };
    return Zigzag;
}());
// Components
m.mount(document.getElementById('header'), headerComponent);
m.mount(document.getElementById('zigzag'), Zigzag);
export { commonCtrl };
//# sourceMappingURL=index.js.map