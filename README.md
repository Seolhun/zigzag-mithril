# Getting started 'Mithril.js'
- Author : [SeolHun](https://github.com/SeolHun)
- Date : 15.11.2017
---
### Requirement
- Node

---
### How to run this porject
1. Dev run
- npm run dev

2. Prod build
- npm build
	1. dist directory 안에 빌드된 결과가 나옵니다.
	2. dist 안에 있는 static과 index.html을 배포합니다.

---
### Building Mithril on vue-cli without vue
- 배경
  1. Mithril의 빌드 및 개발방법 관련한 정보를 확장하고 싶었습니다.
  2. Vue에 익숙하여 Vue-Cli에 잘 적용된 Webpack 설정을 가져오면 어렵지 않게 Mithril 개발의 환경을 비슷하게 적용할 수 있지 않을까란 생각을 하였습니다.
  
- 결과
	- 실행에 옮겨 이와 같은 프로젝트 결과를 얻을 수 있었습니다.
	- 그래서, 각각의 설정방법과 Packages관련한 설정정보를 정리하고자 합니다.

---
### - Mithril 공식사이트에서 기재된 방법입니다.
- [Mithril.js](https://mithril.js.org/installation.html)
1. npm init --yes
- creates a file called package.json

2. npm install mithril --save

3. Path config
- $ mkdir src
- $ touch Header.js
```javascript
Header.js
var m = require("mithril")

m.render(document.body, "hello world")
```
4. npm install webpack --save-dev

5. Open the **package.json** that you created earlier, and add an entry to the scripts section:
```json
{
    "name": "my-project-name",
    "scripts": {
        "start": Header.js
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
