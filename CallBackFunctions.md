## What is a Callback Function

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

JavaScript is a synchronous and single-threaded language but with the help of callbacks, we can do async stuff with JS!

## Blocking the Main Thread 🙅🏻‍♂️

The call stack is also known as the **_Main Thread_**.

As there is only one call stack or main thread in JS, if a part of a program takes a lot of time to execute, it _blocks_ the main thread for the rest of the program.

This is called **_Blocking of Main Thread_** and we should avoid doing this.

Asynchronous functions help us avoid this problem and `setTimeout()` is a prime example of that.

Here is an example of blcoking the main thread:

```js
console.log("start");

setTimeout(function cb() {
  console.log("Callback");
}, 1000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
//blocking the main thread for 10 seconds
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires");
```

The output looks like this:

```
start
end

//...waits for 10 seconds (instead of 1 second of setTimeout)....

while expires
Callback
```
