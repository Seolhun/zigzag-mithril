# Mithril
---
### Mithril Router

1. 

2. [routeResolver.onmatch](https://mithril.js.org/route.html#routeresolveronmatch)
- The onmatch hook is called when the router needs to find a component to render. 
- It is called once per router path changes, but not on subsequent redraws while on the same path. 
- It can be used to run logic before a component initializes (for example authentication logic, data preloading, redirection analytics tracking, etc)

- This method also allows you to asynchronously define what component will be rendered, making it suitable for code splitting and asynchronous module loading. 
- To render a component asynchronously return a promise that resolves to a component.


3. 



