## Simple summary to use Mithril.

Author : [SeolHun](Https://github.com/SeolHun)
---
#### 1. [JSX]
- JSX는 Javascript로 HTML 태그를 작성할 수있는 구문 확장입니다. 
- Javascript 표준은 아니지만, 팀에 선호도에 따라 사용하는 것이 더 편리할 수 있습니다.

- [Mithril JSX]((https://mithril.js.org/jsx.html))


```javascript
// Basic Mithril
var MyComponent = {
  view: function() {
    return m("main", [
      m("h1", "Hello world"),
    ])
  }
}

// JSX
var MyComponent = {
  view: function() {
    return (
      <main>
        <h1>Hello world</h1>
      </main>
    )
  }
}
```

#### 3. ES6
Mithril은 ES5로 작성되었으며 ES6와도 완벽하게 호환됩니다. ES6은 다양한 일반적인 경우에 대해 새로운 구문 설탕을 도입 한 Javascript에 대한 최근 업데이트입니다. 모든 주요 브라우저가 아직 완전히 지원하지는 않으며 응용 프로그램을 작성하는 데 필요하지 않지만 팀의 기본 설정에 따라 사용하는 것이 즐겁습니다.

일부 제한된 환경에서는 IE를 지원하지 않는 내부 응용 프로그램과 같이 별도의 도구없이 ES6의 중요한 하위 집합을 직접 사용할 수 있습니다. 그러나 대부분의 사용 사례에서 ES6 기능을 ES5로 컴파일하려면 Babel과 같은 컴파일러 도구 체인이 필요합니다.
