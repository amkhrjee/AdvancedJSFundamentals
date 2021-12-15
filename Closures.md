# ⚡Closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Yes, it's that simple, huh 😲

> 📺 Watch: [Closures in JavaScript](https://youtu.be/qikxEIxsXco)

> 💡 When you return a function from another function, that returned function still holds reference to its original lexical scope (the original parent function)

> Helpful YouTube comment: https://imgur.com/gallery/J5sEaMy

# An interesting problem 🧐

## `var`: the problem 🥲

Observe the following code:

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();
```

Now, let's go through each of the line carefully. We have declared a function `x`. In that function we ran a `for` loop where the iterator `i` startes from `1` and should stop at `5`. Inside that loop, we have a `setTimeout` method that is supposed to log the value of the iterator in an interval of `i * 1000` ms.

So, that means, in the first iteration, `i=1` and hence it should log `1` at an interval of `1 * 1000` ms, that is `1` second. And similarly, `2` gets logged at an interval of `2` seconds and so on till `5`.

> ## None of this happens 😵

The output in the console looks like this:

```
6
6
6
6
6
```

## But why? 😕

Well, it has everything to do with closures.

As we know, JavaScript does not wait for the `setTimeout` to do its output, rather it moves on to the next line of code, and here, this means, rather than waiting for teh set interval, JavaScript goes on to teh next iteration of the loop, and with each successive iteration, the valeue of `i` changes and so does the closure of the `setInterval` method.

In the end, when the value of `i` reaches `i = 6`, and thge loop stops, it's too late and the closure to `setInterval` has been set to `6` and that's what it prints out in the end.

## `let`: the solution 🎉

This problem can be solved by just changing `var` to `let`!

```js
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();
```

Gives the output:

```
1
2
3
4
5
```

## Why tho? 🤔

Unlike global-scoped `var`, `let` is block-scoped and hence with each iteration of the loop, it's a new `i` that gets passed onto the `setInterval` method.

> This means, even though JS doesn't wait for the `setInterval` for its output, the closure to each of the `setInterval` is a different variable `i` - the `i` that is in its scope.

And that's why it is able to log the correct output.

## Solving the problem with `var` 😎

We can easily solve this problem with `var` too if we solve the closure issue.

`var` is function scoped - so we can proceed with that knowledge and try to solve the problem.

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    function closure(x) {
      setTimeout(function (x) {
        console.log(x);
      }, i * 1000);
    }
    closure(i);
  }
}
x();
```

Here we have encapsulated `setTimeout` within a function. We pass that function a value of `i` with each iteration and as `var` is function-scoped, and because we are invoking a new function context with each of our iteration, `setTimeout` gets different values of `i` with each iteration and hence logs the desired output:

```
1
2
3
4
5
```

//todo: data hiding, encapsulation, garabage collection, memory leaks
