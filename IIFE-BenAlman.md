> The following have been taken from [Ben Alman's blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife) for my own refrence purpose.

# Immediately-Invoked Function Expressions(IIFE)

In case you hadn’t noticed, I’m a bit of a stickler for terminology. So, after hearing the popular, yet misleading, JavaScript term “self-executing anonymous function” (or self-invoked anonymous function) one too many times, I’ve finally decided to organize my thoughts into an article.

In addition to providing some very thorough information about how this pattern actually works, I’ve actually made a recommendation on what we should call it, moving forward. Also, If you want to skip ahead, you can just check out some actual Immediately-Invoked Function Expressions, but I recommend reading the entire article.

Please understand that this article isn’t intended to be an “I’m right, you’re wrong” kind of thing. I’m genuinely interested in helping people understand potentially complex concepts, and feel that using consistent and accurate terminology is one of the easiest things that people can do to facilitate understanding.

## So, what's this all about, anyways?

In JavaScript, every function, when invoked, creates a new execution context. Because variables and functions defined within a function may only be accessed inside, but not outside, that context, invoking a function provides a very easy way to create privacy.

```js
// Because this function returns another function that has access to the

// "private" var i, the returned function is, effectively, "privileged."

function makeCounter() {
  // `i` is only accessible inside `makeCounter`.

  var i = 0;

  return function () {
    console.log(++i);
  };
}

// Note that `counter` and `counter2` each have their own scoped `i`.

var counter = makeCounter();

counter(); // logs: 1

counter(); // logs: 2

var counter2 = makeCounter();

counter2(); // logs: 1

counter2(); // logs: 2

i; // ReferenceError: i is not defined (it only exists inside makeCounter)
```

In many cases, you won’t need multiple “instances” of whatever your `makeWhatever` function returns, and can make do with just a single instance, and in other cases, you’re not even explicitly returning a value.

## The heart of the matter

Now, whether you define a function like function `foo(){}` or `var foo = function(){}`, what you end up with is an identifier for a function, that you can invoke by putting parens (parentheses, `()`) after it, like `foo()`.

```js
/*Because a function defined like so can be invoked by putting () after the function name, like foo(), and because foo is just a reference to the function expression `function() { code  }
 */

var foo = function () {
  /*code*/
};

//...doesn;t it stand to reason that the function expressioin itself can be invoked, just by putting () after it?

function(){/*code*/}(); //SyntaxError: Unexpected token
```

As you can see, there’s a catch. When the parser encounters the `function` keyword in the global scope or inside a function, it treats it as a function declaration (statement), and not as a function expression, by default. If you don’t explicitly tell the parser to expect an expression, it sees what it thinks to be a _function declaration without a name_ and throws a SyntaxError exception because function declarations require a name.

## An aside: functions, parens and SyntaxErrors

Interestingly enough, if you were to specify a name for that function and put parens immediately after it, the parser would also throw a SyntaxError, but for a different reason. While parens placed after an expression indicate that the expression is a function to be invoked, parens placed after a statement are totally separate from the preceding statment, and are simply a grouping operator (used as a means to control precedence of evaluation).

```js
/*While this function declaration is now syntactically valid, it's still a statement, and the following set of parens is invalid because the grouping operator needs to contain the expression.
 */

function foo() {/*code*/}(); //SyntaxError: Unexpected token

//Now, if you put an expression in the parens, no exception is thrown...
//but the function isn't executed either, because this:

function foo() {/*code*/}(1);

// Is really just equivalent to this, a function declaration followed by a
// completely unrelated expression:

function foo(){ /* code */ }

( 1 );
```

## Immediately-Invoked Function Expression (IIFE)

Fortunately, the SyntaxError “fix” is simple. **_The most widely accepted way to tell the parser to expect a function expression is just to wrap it in parens, because in JavaScript, parens can’t contain statements._** At this point, when the parser encounters the function keyword, it knows to parse it as a function expression and not a function declaration.

```js
//Either of the following two patterns can be used
//to immediately invoke a function expression, utilizing the function's exection context to
//create 'privacy'

(function(){/*code*/}()) //Crockford recommends this one

(function(){/*code*/})()//But this one works just as well 

//Because the point of the parens or coercing operators is too disambiguate between 
//function expressions and function declarations, they can be 
//omitted when the parser already expects an expression (but please see the "important note" below).

var i = function(){ return 10;}();
true && function(){/*code*/}();
0, function(){/*code*/}();

// If you don't care about the return value, or the possibility of making
// your code slightly harder to read, you can save a byte by just prefixing
// the function with a unary operator.

!function(){/*code*/}();
~function(){/*code*/}();
-function(){/*code*/}();
+function(){/*code*/}();

// Here's another variation, from @kuvos - I'm not sure of the performance
// implications, if any, of using the `new` keyword, but it works.
// http://twitter.com/kuvos/status/18209252090847232


new function(){ /* code */ }
new function(){ /* code */ }() // Only need parens if passing arguments

```
## An important note about parens 
In cases where the extra “disambiguation” parens surrounding the function expression are unnecessary (because the parser already expects an expression), it’s still a good idea to use them when making an assignment, as a matter of convention.

Such parens typically indicate that the function expression will be immediately invoked, and the variable will contain the result of the function, not the function itself. This can save someone reading your code the trouble of having to scroll down to the bottom of what might be a very long function expression to see if it has been invoked or not.

*As a rule of thumb, while writing unambiguous code might be technically necessary to keep the JavaScript parser from throwing SyntaxError exceptions, writing unambiguous code is also fairly necessary to keep other developers from throwing “WTFError” exceptions at you!*

## Saving State with closures
Just like when arguments may be passed when functions are invoked by their named identifier, they may also be passed when immediately invoking a function expression. And because any function defined inside another function can access the outer function’s passed-in arguments and variables (this relationship is known as a closure), an **Immediately-Invoked Function Expression** can be used to “lock in” values and effectively save state.