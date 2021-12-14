# What the heck is a Block? 🤔

A block is defined by curly breaces.

```js
{
  //this is a block
}
```

A block is also called a **Compund Statement** as it is used to combine multiple JS statements into one group.

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
