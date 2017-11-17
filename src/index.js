"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
require("router/Router");
require("assets/scss/global.scss");
var Header_1 = require("components/layout/Header");
var Zigzag = /** @class */ (function () {
    function Zigzag() {
    }
    Zigzag.prototype.view = function () {
        return (m("div", { class: 'container' },
            m("div", { class: 'row' },
                m("div", { class: 'col-sm-12' },
                    m("h1", null, "ZIGZAG app using mithril.js"),
                    m("p", null, "Local Css")))));
    };
    return Zigzag;
}());
// Components
m.mount(document.getElementById('header'), Header_1.default);
m.mount(document.getElementById('zigzag'), Zigzag);
//# sourceMappingURL=index.js.map