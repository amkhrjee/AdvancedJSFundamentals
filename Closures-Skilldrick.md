> Source: [Nick Morgan aka SkillDrick's blog](http://skilldrick.co.uk/2011/04/closures-explained-with-javascript/)

# Closures explained with JavaScript

Last year I wrote A brief introduction to closures which was meant to help people understand exactly what a closure is and how it works. I’m going to attempt that again, but from a different angle. I think with these kinds of concept, you just need to read as many alternative explanations as you can in order to get a well rounded view.

## First-class functions

As I explained in Why JavaScript is AWESOME, one of the most powerful parts of JavaScript is its first-class functions. So, what does “first-class” mean in a programming language? To quote wikipedia, something is first-class if it:

> - can be strored in variables and data structures
> - can be passed as parameter to a subroutine
> - can be returned as the result of a subroutine
> - can be constructed at runtime
> - has intrinsic identity(independent of any given name)

So, functions in JavaScript are just like objects. In fact, in JavaScript functions _are_ objects.

The ability to nest functions gives us closures. Which is what I’m going to talk about next…

## Nested functions

```js
function f(x) {
  function g() {
    return x;
  }
  return g;
}

//Tell f to create a new g
var g5 = f(5);

//g5 is a function that always returns 5
alert(g5());

//Tell f to create another new g
var g1 = f(1);

//g1 is a function that always returns 1
alert(g1());
```

The important thing to note here is that there is only one `f` defined. Each time `f` is called, a new function `g` is created, local to that execution of `f`. When that function `g` is returned, we can assign its value to a globally defined variable. So, we call `f` and assign the result to `g5`, then we call `f` again and assign the result to `g1`. `g1` and `g5` are two different functions. They happen to share the same code, but they were executed in different environments, with different free variables. (As an aside, we don’t need to use a function definition to define `g` and then return it. Instead, we can use a function expression which allows us to create a function without naming it. These are called ‘anonymous functions’ or lambdas.)

## Free variables and scope

A variable is free in any particular scope if it is defined within an enclosing scope. To make that more concrete, in the scope of `g`, the variable `x` is free, because it is defined within the scope of `f`. Any global variables are free within the scopes of `f` and `g`.

What do I mean by scope? A scope is an area of code where a variable may be defined, without the enclosing scope knowing about it. JavaScript has ‘function scope’, so each function has its own scope. So, any variable defined within `f`is invisible outside of `f`. Scopes can be nested, so in the above example, `g` has its own scope which is contained within the scope of `f`, which is contained within the global scope. Whenever a variable is accessed, the JavaScript interpreter first looks within the current scope. If the variable is not found to be defined within the current scope, the interpreter checks the enclosing scope, then the enclosing scope of the enclosing scope, all the way up to the global scope. If the variable is not found, a `ReferenceError` is thrown.

## Closures are functions that retain a reference to their free variables

And this is the meat of the matter. Let’s look at a simplified version of the above example first:

```js
function f(x) {
  function g() {
    return x;
  }
  alert(g());
}

f(5);
```

It’s no surprise that when you call f with the argument 5, when g is called it has access to that argument. What’s a bit more surprising is that if you return g from the argument, the returned function still has access to the argument 5 (as shown in the original example). The bit that can be a bit mind-blowing (and I think generally the reason that people have such trouble understanding closures) is that the returned g actually is remembering the variable x that was defined when f was called. That might not make much sense, so here’s another example:

```js
function person(name) {
  function get() {
    return name;
  }

  function set(newName) {
    name = newName;
  }

  return [get, set];
}

var getSetDave = person("Dave");
var getDave = getSetDave[0];
var setDave = getSetDave[1];

alert(getDave()); //'Dave'

setDave("Bob");

alert(getDave()); //'Bob'

var getSetMary = person("Mary");
var getMary = getSetMary[0];
var setMary = getSetMary[1];

alert(getMary()); //'Mary'
```

When person is called, the argument name is bound to the value passed. So, the first time person is called, name is bound to ‘Dave’, and the second time, it’s bound to ‘Mary’. person defines two internal functions, `get` and `set`. The first time these functions are defined, they have a free variable name which is bound to ‘Dave’. These two functions are returned in an array, which is unpacked on the outside to get two functions `getDave` and `setDave`. (If you want to return more than one value from a function, you can either return an object or an array. Using an array here is more verbose, but I didn’t want to confuse the issue by including objects as well.)

And this is the magic bit. `getDave` and `setDave` both remember the same variable name, which was bound to ‘Dave’ originally. When `setDave` is called, that variable is set to ‘Bob’. Now when getDave is called, it returns ‘Bob’ (Dave never liked the name ‘Dave’ anyway). So `getDave` and `setDave` are two functions that remember the same variable. This is what I mean when I say “Closures are functions that retain a reference to their free variables”. `getDave` and `setDave` both remember the free variable name. Even though person has now returned, the variable name lives on, because it is referenced by `getDave` and `setDave`.

The variable name was bound to ‘Dave’ when person was called the first time. When person is called a second time, a new version of name comes into existence, as well as new versions of get and set. So the functions getMary and setMary are completely different to the functions getDave and setDave. They execute identical code, but in two different environments, with different free variables.

## Summary

In summary, a closure is a function called in one context that remembers variables defined in another context – the context in which it was defined. Multiple closures defined within the same context remember that same context, so changes they make are shared between them. Every time a function is called that creates closures, a new, shared context is created for the new closures.
