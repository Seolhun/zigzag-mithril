"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
var Header = /** @class */ (function () {
    function Header() {
    }
    Header.prototype.view = function () {
        return (m("nav", { class: "navbar navbar-default" },
            m("div", { class: "container-fluid" },
                m("div", { class: "navbar-header" },
                    m("button", { type: "button", class: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
                        m("span", { class: "sr-only" }, "Toggle navigation"),
                        m("span", { class: "icon-bar" }),
                        m("span", { class: "icon-bar" }),
                        m("span", { class: "icon-bar" })),
                    m("a", { class: "navbar-brand", href: "/" }, "ZIGZAG")),
                m("div", { class: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
                    m("ul", { class: "nav navbar-nav" },
                        m("li", { class: "active" },
                            m("a", { href: "/" },
                                "Intro",
                                m("span", { class: "sr-only" })))),
                    m("form", { class: "navbar-form navbar-right" },
                        m("div", { class: "form-group" },
                            m("input", { type: "text", class: "form-control", placeholder: "Search" })),
                        m("button", { type: "submit", class: "btn btn-default" }, "Submit")),
                    m("ul", { class: "nav navbar-nav navbar-right" },
                        m("li", null,
                            m("a", { href: '/join', oncreate: m.route.link },
                                "Sign in",
                                m("span", { class: "sr-only" }))))))));
    };
    return Header;
}());
exports.default = Header;
//# sourceMappingURL=Header.js.map