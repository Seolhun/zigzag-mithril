# Getting started 'Mithril.js'
- Author : [SeolHun](https://github.com/SeolHun)
- Date : 15.11.2017


## - Process
- [Mithril.js](https://mithril.js.org/installation.html)
1. Node Install

2. npm init --yes
- creates a file called package.json

3. npm install mithril --save

4. Path config
- $ mkdir src
- $ touch index.js
```javascript
// index.js
var m = require("mithril")

m.render(document.body, "hello world")
```

5. npm install webpack --save-dev

6. Open the **package.json** that you created earlier, and add an entry to the scripts section:
```json
{
    "name": "my-project-name",
    "scripts": {
        "start": "webpack src/index.js bin/app.js -d --watch"
    }
}
```

7. npm start

8. touch index.html