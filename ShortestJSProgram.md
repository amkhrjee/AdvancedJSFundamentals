## What is the shortest program possible in JavaScript?

The shortest possible program in JavaScript is an empty file 🤯

Yes, even though there is apparently no JS code in the empty file, the JS engine of a browser still creates the Global Execution Context and puts it into the ECS (or Call Stack or call it whatver the heck you want).

As a result a `window` object gets created and the methods and variables available in the `window` object can be used using the `this` keyword.

In the global scope, the `this` keyboard points to the `window` object as it is in the GEC.

In a function/constructor, `this` points to objects specfic to the execution context.

```js
//in the global context
this === window; //true

//also
var a = 10;

console.log((window.a == a) == this.a); //true
```
