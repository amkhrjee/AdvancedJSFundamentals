# Scope Chain

> A _scope chain_ is a _list of objects_ that are searched for _identifiers_ appear in the code of the context.

The rule is again simple and similar to a prototype chain: if a variable is not found in the own scope (in the own variable/activation object), its lookup proceeds in the parent’s variable object, and so on.

Regarding contexts, identifiers are: names of variables, function declarations, formal parameters, etc. When a function refers in its code the identifier which is not a local variable (or a local function or a formal parameter), such variable is called a _free variable_. And to search these free variables exactly a scope chain is used.

> _In general case, a scope chain is a list of all those parent variable objects, plus (in the front of scope chain) the function’s own variable/activation object._

However, the scope chain may contain also any other object, e.g. objects dynamically added to the scope chain during the execution of the context — such as with-objects or special objects of catch-clauses.

When resolving (looking up) an identifier, the scope chain is searched starting from the activation object, and then (if the identifier isn’t found in the own activation object) up to the top of the scope chain — repeat, the same just like with a prototype chain.

```js
var x = 10;

(function foo() {
  var y = 20;
  (function bar() {
    var z = 30;
    // "x" and "y" are "free variables"
    // and are found in the next (after
    // bar's activation object) object
    // of the bar's scope chain
    console.log(x + y + z);
  })();
})();
```
