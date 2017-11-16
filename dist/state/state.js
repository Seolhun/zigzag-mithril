"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const m = require("mithril");
class MyComponent {
    constructor() {
        this.count = 0;
    }
    view({ attrs }) {
        return m('span', `name: ${attrs.name}, count: ${this.count}`);
    }
}
exports.default = MyComponent;
//# sourceMappingURL=state.js.map