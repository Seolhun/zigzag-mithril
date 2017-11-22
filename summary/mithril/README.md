## Simple summary to use Mithril.
---
### - Mithril 공식사이트에서 기재된 방법입니다.
- [Mithril.js](https://mithril.js.org/installation.html)
1. npm init --yes
- creates a file called package.json

2. npm install mithril --save

3. Path config
- $ mkdir src
- $ touch index.js
```javascript
index.js
var m = require("mithril")

m.render(document.body, "hello world")
```
4. npm install webpack --save-dev

5. Open the **package.json** that you created earlier, and add an entry to the scripts section:
```json
{
    "name": "my-project-name",
    "scripts": {
        "start": "webpack src/index.js bin/app.js --watch"
    }
}
```
7. touch index.html
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
8. npm start

---
#### [JSX] - [Mithril JSX]((https://mithril.js.org/jsx.html))
- JSX는 Javascript로 HTML 태그를 작성할 수있는 구문 확장입니다. 
- Javascript 표준은 아니지만, 팀에 선호도에 따라 사용하는 것이 더 편리할 수 있습니다.

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
