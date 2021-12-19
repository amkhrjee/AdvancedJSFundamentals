# Environment
Every execution context has an associated lexical environment.

> **Lexical environment**: A lexical environment is a structure used to define association between identifiers appearing in the context with their values. Each environment can have a reference to an optional parent environment.

So an environment is a storage of variables, functions, and classes defined in a scope.
> ⭐ **Technically, an environment is a pair, consisting of an environment record (an actual storage table which maps identifiers to values), and a reference to the parent (which can be `null`).**

For the code:

```js
let x = 10;
let y = 20;
 
function foo(z) {
  let x = 100;
  return x + y + z;
}
 
foo(30); // 150
```
The environment structures of the _global context_, and a context of the `foo` function would look as follows:

![Environment Change](../../Assets/environment-chain.png)

Logically this reminds us of the prototype chain which we’ve discussed above. And the rule for identifiers resolution is very similar: if a variable is not found in the own environment, there is an attempt to lookup it in the parent environment, in the parent of the parent, and so on — until the whole environment chain is considered.

> **Identifier resolution**: the process of resolving a variable (binding) in an environment chain. An unresolved binding results to `ReferenceError`.


This explains why variable `x` is resolved to `100`, but not to `10` — it is found directly in the _own environment_ of `foo`; why we can access parameter `z` — it’s also just stored on the _activation environment_; and also why we can access the variable `y` — it is found in the _parent environment_.

Similarly to prototypes, the same parent environment can be shared by several child environments: for example, two global functions share the same global environment.

Environment records differ by type. There are object environment records and declarative environment records. On top of the declarative record there are also function environment records, and module environment records. Each type of the record has specific only to its properties. However, the generic mechanism of the identifier resolution is common across all the environments, and doesn’t depend on the type of record.

An example of an object environment record can be the record of the global environment. Such record has also associated binding object, which may store some properties from the record, but not the others, and vice-versa. The binding object can also be provided as `this` value.
```js
// Legacy variables using `var`.
var x = 10;
 
// Modern variables using `let`.
let y = 20;
 
// Both are added to the environment record:
console.log(
  x, // 10
  y, // 20
);
 
// But only `x` is added to the "binding object".
// The binding object of the global environment
// is the global object, and equals to `this`:
 
console.log(
  this.x, // 10
  this.y, // undefined!
);
 
// Binding object can store a name which is not
// added to the environment record, since it's
// not a valid identifier:
 
this['not valid ID'] = 30;
 
console.log(
  this['not valid ID'], // 30
);
```
This is depicted on the following figure:

![](../../Assets/env-binding-object.png)

Notice, the binding object exists to cover legacy constructs such as `var`-declarations, and `with`-statements, which also provide their object as a binding object. These are historical reason when environments were represented as simple objects. Currently, the environments model is much more optimized, however as a result we can’t access binding as properties anymore.



