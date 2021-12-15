# 🏄‍♂️ Let's dive deep into the world of functions - the 💖 of JS!

## ➡️ Function Statement

Example of function statement:

```js
function a() {
  //
}
```

This way of creating a function is called a function statement. That's it.

## ➡️ Function Expression

```js
var b = function () {
  //
};
```

## ⚡ Difference between FS and FE

The main difference between the two is in hoisting.

| Subject                 | Function Statement                      | Function Expression                                           |
| ----------------------- | --------------------------------------- | ------------------------------------------------------------- |
| Memory Allocation Phase | Allocated memory to the entire function | Treated like any other variable and given a value `undefined` |

## ➡️ Function Declaration

> Function Declaration = Function Statement

## ➡️ Anonymous Function

Function without names are anonymous functions. These are used in function expressions.

```js
function(){
//
}

```

## ➡️ Named Function Expression

It's like FE but instead of an anonymous function, we use a function with a name.

```js
var b = function name() {
  //
};
```

> ⚠️ Caveat: You will get an error if you try to do `name()`. It's fine to do `b()` though.
>
> ```
> Uncaught ReferenceError: name is not defined
> ```
>
> This happens because `name` is not created as a function in the scope rather as a variable.

## ⚡Difference between Parameters and Arguments

We will understand this with a simple example!

```js
function nameOfFunction(thisIsParameter, anotherParameter) {
  //do something
}

nameOfFunction(thisIsArgument, anotherArgument);
```

Hope it's clear now!

## ➡️ First Class Functions 🤵🏻‍♂️

> Same as saying "_Functions are first-class citizens_"

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

> Source: [MDN first-class functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)
