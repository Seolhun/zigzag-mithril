import * as m from "mithril";
import {ClassComponent, CVnode} from "mithril";

// ClassComponent example, importing types separately:
export interface Attrs {
  name: string;
}

export default class MyComponent implements ClassComponent<Attrs> {
  count = 0;

  // Note that class methods cannot infer parameter types
  view({attrs}: CVnode<Attrs>) {
    return m("span", `name: ${attrs.name}, count: ${this.count}`);
  }
}
