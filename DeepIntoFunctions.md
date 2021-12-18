# 🏄‍♂️ Let's dive deep into the world of functions - the 💖 of JS!

## ➡️ Function Statement

Example of function statement:

```js
function bar() {
  //
}
```

This way of creating a function is called a function statement. That's it.

This creates a function named(i.e., with an internal name of) `bar` and stores is it in a variable named `bar`.

Hence, it creates the variable `bar` as a side-effect.

## ➡️ Function Expression

```js
const foo = function bar() {
  //
};
```

Here `const foo` creates a variable named `foo`.

The function expression creates a function named `bar`(again, an internal name) and assigns it to `foo`.

No variable `bar` is created.

## ➡️ Immediately Invoked Function Expression (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in [his blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

```js
(function () {
  statements;
})();
```

> This immediately-invoked function expression creates a function named `bar` and invokes it. There is no variable `bar`. The function isn't stored anywhere.

It is a design pattern which is also known as **Self-Executing Anonymous Function** and contains two major parts:

- The first is the anonymous function with lexical scope withing the `Grouping opertator ()`.
- The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

### 🏢 Use Cases

- **Avoid polluting the global namespace**: Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

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

## Further Reading 📗

- [JS Design Patterns by Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
