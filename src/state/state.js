"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("mithril");
var MyComponent = (function () {
    function MyComponent() {
        this.count = 0;
    }
    // Note that class methods cannot infer parameter types
    MyComponent.prototype.view = function (_a) {
        var attrs = _a.attrs;
        return m("span", "name: " + attrs.name + ", count: " + this.count);
    };
    return MyComponent;
}());
exports.default = MyComponent;
//# sourceMappingURL=state.js.map