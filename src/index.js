"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
require("./router/route");
require("./assets/scss/global.scss");
// import styles = require('./assets/scss/user/user.scss')
var styles = require("./assets/scss/user/user.scss");
// let Stream = require('mithril/stream')
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.view = function () {
        return m("div", { class: styles.message }, "Hello Mithril with JSX");
    };
    return App;
}());
// Components
// let MyComponent = require('./components/mycomponent')
// m.mount(document.getElementById('sub-main'), MyComponent)
m.mount(document.getElementById('app'), App);
m.render(document.getElementById('hello'), 'Hello Mithril.js');
//# sourceMappingURL=index.js.map