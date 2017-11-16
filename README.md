# Getting started 'Mithril.js'
- Author : [SeolHun](https://github.com/SeolHun)
- Date : 15.11.2017


### - Process
- [Mithril.js](https://mithril.js.org/installation.html)
1. Node Install

2. npm init --yes
- creates a file called package.json

3. npm install mithril --save

4. Path config
- $ mkdir src
- $ touch index.js
```javascript
index.js
var m = require("mithril")

m.render(document.body, "hello world")
```

5. npm install webpack --save-dev

6. Open the **package.json** that you created earlier, and add an entry to the scripts section:
```json
{
    "name": "my-project-name",
    "scripts": {
        "start": index.js
    }
}
```

7. npm start

8. touch index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>My Application</title>
</head>
<body>
<script src="bin/app.js"></script>
</body>
</html>
```

---
### []TypeScript](https://github.com/MithrilJS/mithril.d.ts)


---
### LifeCycle
- oninit
    - The oninit(vnode) hook is called before a vnode is touched by the virtual DOM engine. oninit is guaranteed to run before its DOM element is attached to the document, and it is guaranteed to run on parent vnodes before their children, but it does not offer any guarantees regarding the existence of ancestor or descendant DOM elements. You should never access the vnode.dom from the oninit method.
    - Example
        ```javascript
        var ComponentWithState = {
            oninit: function(vnode) {
                this.data = vnode.attrs.data
            },
            view: function() {
                return m("div", this.data) // displays data from initialization time
            }
        }
        
        m(ComponentWithState, {data: "Hello"})
        
        // Equivalent HTML
        // <div>Hello</div>
        ```
- oncreate
    - The oncreate(vnode) hook is called after a DOM element is created and attached to the document. oncreate is guaranteed to run at the end of the render cycle, so it is safe to read layout values such as vnode.dom.offsetHeight and vnode.dom.getBoundingClientRect() from this method.
    - Example
        ```javascript
        var HeightReporter = {
            oncreate: function(vnode) {
                console.log("Initialized with height of: ", vnode.dom.offsetHeight)
            },
            view: function() {}
        }
        
        m(HeightReporter, {data: "Hello"})
        ```
- onupdate
    - The onupdate(vnode) hook is called after a DOM element is updated, while attached to the document. onupdate is guaranteed to run at the end of the render cycle, so it is safe to read layout values such as vnode.dom.offsetHeight and vnode.dom.getBoundingClientRect() from this method.
    - Example
        ```javascript
        var RedrawReporter = {
            count: 0,
            onupdate: function(vnode) {
                console.log("Redraws so far: ", ++vnode.state.count)
            },
            view: function() {}
        }
        
        m(RedrawReporter, {data: "Hello"})
        ```
- onbeforeremove
    - The onbeforeremove(vnode) hook is called before a DOM element is detached from the document. If a Promise is returned, Mithril only detaches the DOM element after the promise completes.
    - Example
        ```javascript
        var Fader = {
            onbeforeremove: function(vnode) {
                vnode.dom.classList.add("fade-out")
                return new Promise(function(resolve) {
                    setTimeout(resolve, 1000)
                })
            },
            view: function() {
                return m("div", "Bye")
            },
        }
        ```
- onremove
    - The onremove(vnode) hook is called before a DOM element is removed from the document. If a onbeforeremove hook is also defined, the onremove hook runs after the promise returned from onbeforeremove is completed.
    - Example
        ```javascript
        var Timer = {
            oninit: function(vnode) {
                this.timeout = setTimeout(function() {
                    console.log("timed out")
                }, 1000)
            },
            onremove: function(vnode) {
                clearTimeout(this.timeout)
            },
            view: function() {}
        }
        ```
- onbeforeupdate
    - The onbeforeupdate(vnode, old) hook is called before a vnode is diffed in a update. If this function is defined and returns false, Mithril prevents a diff from happening to the vnode, and consequently to the vnode's children.
