# Execution Context

To execute JS code and track its runtime evaluation, ECMAScript spec defines the concept of _an execution context_. Logically execution contexts are maintained using a stack (the execution context stack as we will see shortly), which corresponds to the generic concept of a _call-stack_.

> **Execution context**: An execution context is a specification device that is used to track the runtime evaluation of the code.

There are several types of ECMAScript code: _the global code_, _function code_, `eval` code, and _module code_; each code is evaluated in its execution context. Different code types, and their appropriate objects may affect the structure of an execution context: for example, _generator functions_ save their _generator object_ on the context.

Let’s consider a recursive function call:

```js
function recursive(flag) {
 
  // Exit condition.
  if (flag === 2) {
    return;
  }
 
  // Call recursively.
  recursive(++flag);
}
 
// Go.
recursive(0);
```
When a function is called, a new execution context is created, and pushed onto the stack — at this point it becomes an _**active execution context**_. When a function returns, its context is popped from the stack.

A context which calls another context is called a _caller_. And a context which is being called, accordingly, is a _callee_. In our example the `recursive` function plays both roles: of a callee and a caller — when calls itself recursively.

> **Execution context stack**: An execution context stack is a LIFO structure used to maintain control flow and order of execution.

For our example from above we have the following stack “push-pop” modifications:

![Execution Stack](../../Assets/execution-stack.png)

As we can also see, the global context is always at the bottom of the stack, it is created prior execution of any other context.


In general, the code of a context runs to completion, however as we mentioned above, some objects — such as generators, may violate LIFO order of the stack. A generator function may suspend its running context, and remove it from the stack before completion. Once a generator is activated again, its context is resumed and again is pushed onto the stack:

```js
function *gen() {
  yield 1;
  return 2;
}
 
let g = gen();
 
console.log(
  g.next().value, // 1
  g.next().value, // 2
);
```
The `yield` statement here returns the value to the caller, and pops the context. On the second `next` call, the same context is pushed again onto the stack, and is _resumed_. Such context may _outlive_ the caller which creates it, hence the violation of the LIFO structure.

We shall now discuss the important components of an execution context; in particular we should see how ECMAScript runtime manages _variables storage_, and _scopes_ created by nested blocks of a code. This is the generic concept of _lexical environments_, which is used in JS to store data, and solve the _“Funarg problem” _ — with the mechanism of closures.






