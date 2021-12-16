## Basic Structure of an Event Listener

```js
someElement.addEventListener(
  "something happens",
  function doThisFunctionThisCanBeAnonymousToo() {
    //do something
  }
);
```

## Garbage Collection and `removeEventListener`

Watch this: https://youtu.be/btj35dh3_U8?t=1165

> **In a nutshell**: event listeners are heavy stuff and they don't allow JS to free up memory the closure memory even if there is nothing in the call stack (because you never when someone is gonna click that button)
