"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {Stream} from 'mithril/stream'
var m = require("mithril");
var styles = require("assets/scss/user/user.scss");
// const num = stream(1);
// const text = stream<string>();
// let s: Stream<User>;
// s = stream(new User());
exports.default = {
    view: function () {
        return (m("div", { class: "container" },
            m("div", { class: "row" },
                m("h1", { class: styles.message }, "Welcome to Sign in ZIGZAG"),
                m("div", { class: "col-sm-12" },
                    m("label", null,
                        "Email",
                        m("input", { class: "form-control" }))),
                m("div", { class: "col-sm-12" },
                    m("label", null,
                        "Password",
                        m("input", { class: "form-control", type: "password" }))))));
    }
};
//# sourceMappingURL=SignIn.js.map