# Mithril
---
### Mithril LifeCycle
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
