# What the heck is a Block? 🤔

A block is defined by curly breaces.

```js
{
  //this is a block
}
```

A block is also called a **Compound Statement** as it is used to combine multiple JS statements into one group.

> ## But why do we need to group statements?😕🤔

We can group multiple statements together and use them where JavaScript excpects _a_ statement.

For example, the following code throws error as JavaScript expects a statement here, which we haven't provided.

```js
if(true)

//Uncaught SyntaxError
```

So, we can provide this `if` with a statement like `console.log("Hello World")` for sure, but what if we also want to do a `for` loop or maybe a `switch` statement or maybe even something else - but hold on a second ✋🏻, these are more than one statements - and didn't we say that `if` expects only one statement? Here comes the use of blocks.🎉

> We can _block_ all these differnt statements together into one and supply the `if` 😎

Observe the following code:

```js
{
  var a = 10;
  let b = 20;
  const c = 30;
}
```

Here, `var` is saved in the global scope(as it is attached to the global `window` object), but, on the other hand, `let` and `const` are stored in the `Block Scope` and can only be accessed from inside the block.

> 😴 Just in case you're sleeping while reading this: this means `var` can be accessed from even outside the block as it is stored in the global scope.

## Shadowing

Let's see an example first:

```js
var a = 10;
{
  var a = "hello";
  let b = 20;
  const c = 50;

  console.log(a); //hello
  console.log(b); //20
  console.log(c); //50
}

console.log(a); //hello
```

Here the `a` in the block (within the `{}`) _shadows_ the `a` declared outside of the block.

### Why tho? 🤔

It's because when you declare a variable with `var` it's attached to the global `window` object, so it has nothing to do with block-scopes in the first place!
So, when we assign a new value to `a` later on in the curly braces, it just changes the same `a` that was attached to the global scope.

And hence, the value of `a` apppears changed even outside of the block scope.

> ⚠️ This, however, doesn't apply for `let` and `const` as they are block-scoped by nature. So, shadowing only works inside of the block-scope.

## Illegall Shadowing 🙅🏻‍♂️

You cannot shadow a `let` variable inside a block-scope using a `var`.

```js
let a = 20;
{
  var a = 40;
}
```

```
Uncaught SyntaxError: Identifier 'a' has already been declared
```

As `var` is function scoped - it doesn't throw this error when you do this inside a function.

```js
let a = 20;
function x() {
  var a = 40;
}

//this is absolutely fine
```

> All the scope rules that works for normal functions also works for arrow functions
