# Execution Context

To execute JS code and track its runtime evaluation, ECMAScript spec defines the concept of _an execution context_. Logically execution contexts are maintained using a stack (the execution context stack as we will see shortly), which corresponds to the generic concept of a _call-stack_.

> **Execution context**: An execution context is a specification device that is used to track the runtime evaluation of the code.

There are several types of ECMAScript code: _the global code_, _function code_, `eval` code, and _module code_; each code is evaluated in its execution context. Different code types, and their appropriate objects may affect the structure of an execution context: for example, _generator functions_ save their _generator object_ on the context.


