# **What is lexical scope?**

I understand them through examples. :)

First, lexical scope (also called static scope), in C-like syntax:

```c
void fun()
{
    int x = 5;

    void fun2()
    {
        printf("%d", x);
    }
}

```

Every inner level can access its outer levels.

There is another way, called dynamic scope used by the first implementation of Lisp, again in a C-like syntax:

```js
void fun()
{
    printf("%d", x);
}

void dummy1()
{
    int x = 5;

    fun();
}

void dummy2()
{
    int x = 10;

    fun();
}
```

Here fun can either access `x` in `dummy1` or `dummy2`, or any `x` in any function that call fun with `x` declared in it.

```js
dummy1();
```

will print 5,

```js
dummy2();
```

will print 10.

The first one is called static because it can be deduced at compile-time, and the second is called dynamic because the outer scope is dynamic and depends on the chain call of the functions.

I find static scoping easier for the eye. Most languages went this way eventually, even Lisp (can do both, right?). Dynamic scoping is like passing references of all variables to the called function.

As an example of why the compiler can not deduce the outer dynamic scope of a function, consider our last example. If we write something like this:

```js
if (/_ some condition _/) dummy1();
else dummy2();
```

The call chain depends on a run time condition. If it is true, then the call chain looks like:
f
`dummy1 --> fun()`

If the condition is false:

`dummy2 --> fun()`

The outer scope of fun in both cases is the caller plus the caller of the caller and so on.

Just to mention that the C language does not allow nested functions nor dynamic scoping.

> Source: https://stackoverflow.com/a/1047491/12404524

## 📺 Refererence Video

- [The Scope Chain, Scope & Lexical Environment | Namaste JavaScript Ep. 7
  ](https://youtu.be/uH-tVP8MUs8)
