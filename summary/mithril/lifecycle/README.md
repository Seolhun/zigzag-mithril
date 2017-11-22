# Mithril
---
### Mithril LifeCycle
- oninit
    - onnit (vnode) 훅은 vnode가 가상 DOM 엔진에 의해 접촉되기 전에 호출됩니다.
    - oninit는 DOM 요소가 문서에 첨부되기 전에 실행되며 자식보다 먼저 부모 vnode에서 실행되도록 보장되지만 조상 또는 하위 DOM 요소의 존재에 대한 보장은 제공하지 않습니다. 
    - onnit 메서드에서 vnode.dom에 액세스하면 안됩니다.
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
    - oncreate (vnode) 훅은 DOM 요소가 생성되어 문서에 첨부 된 후에 호출됩니다. 
    - oncreate는 렌더링 사이클의 끝에서 실행되도록 보장되므로이 메소드에서 vnode.dom.offsetHeight 및 vnode.dom.getBoundingClientRect ()와 같은 레이아웃 값을 읽는 것이 안전합니다.
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
    - onupdate (vnode) 훅은 문서에 첨부되어있는 동안 DOM 요소가 업데이트 된 후에 호출됩니다.
    - onupdate는 렌더링 사이클의 끝에서 실행되도록 보장되므로이 메소드에서 vnode.dom.offsetHeight 및 vnode.dom.getBoundingClientRect ()와 같은 레이아웃 값을 읽는 것이 안전합니다.
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
    - DOM 요소가 문서에서 분리되기 전에 onbeforeremove (vnode) 후크가 호출됩니다.
    - Promise가 반환되면 Mithril은 약속이 완료된 후에 만 DOM 요소를 분리합니다.
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
    - DOM 요소가 문서에서 제거되기 전에 onremove (vnode) 훅이 호출됩니다.
    - onbeforeremove 훅도 정의 된 경우 onbeforeremove에서 반환 된 약속이 완료된 후에 onremove 훅이 실행됩니다.
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
    - 업데이트에서 vnode가 diff되기 전에 onbeforeupdate (vnode, old) 훅이 호출됩니다. 
    - 이 함수가 정의되고 false를 반환하면 Mithril은 vnode 및 결과적으로 vnode의 자식에 대한 diff를 방지합니다.
