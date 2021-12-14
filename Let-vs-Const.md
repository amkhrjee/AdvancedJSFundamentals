# `let` 🆚 `var`

> ✅ What apply for `let`, apply for `const` too, except for the fact that the value of a `const` variable cannot be changed further down the line.

> 🧯If you try assigning new value to a `const`, it gives you `TypeError: Assignment to constant variable`

> ⚠️ You must initialize a `const` with some value when declaring it, unlike `let` and `var` you cannot just assign it a value after declaring it.

> ➕ If you do this, you get the error:
> `Uncaught SyntaxError: Missing initializer in const declaration`

When you create a variable with `var`, it is added to the global `window` object and assigned a value of `undefined` before executing further code. So, in one word, it is _hoisted_.

When you create variable with `let`, it _is_ in fact allocated a memory (so, technically, _hoisted_), but **not** in the global `window` object, rather in a memory-space other than global - which you _cannot_ access, until you have assigned them some value yourself.

## **Temporal Dead Zone** ☠️

TDZ is the time in-between the initialization of a `let` variable and when it was assigned a value(basically the time it was being hoisted).

## Understanding `ReferenceError` 🤔

The JS engine could not find the variable in the scope. And hence it shows: `ReferenceError: variable not found` when you do not declare a variable.

But when you declare variable with `let`, and try to access it without assigning any value to it, it shows: `ReferenceError: cannot access variable before initialization` as it cannot be accessed as it is in the TDZ.

## `SyntaxError` - `let` doesn't allow duplication 🙅🏻‍♂️

Unlike `var`, you cannot redeclare variables with `let`.

```js
let b = 100;
let b = "lmao";

//this throws the error ->
SyntaxError: Identifier 'b' has already been declared
```
