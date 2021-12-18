> AFAIK, function expressions are treated as any other variables by JavaScript engines

They aren't.

A function expression evaluates to a **value** which is a **function**. Unlike a function declaration they do not create a variable as a side effect.

# Declaration

    function bar () { };

This creates a function named (i.e. with an internal name of) bar and stores it in a variable named bar.

# Expression

    const foo = function bar() { };

Here `const foo` creates a variable named foo.

The function expression creates a function named bar (again, an internal name) and assigns it to `foo`.

No variable `bar` is created.

# IIFE

    (function bar() { })();

This immediately-invoked function expression creates a function named bar and invokes it. There is no variable `bar`. The function isn't stored anywhere.

---

Note that I'm talking about the score the function is defined in above. Things get a little more complicated _inside_ the function declaration and expressions.
