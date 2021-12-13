# Constructor

Besides creation of objects by specified pattern, a _constructor_ function does another useful thing — it _automatically sets a prototype object_ for newly created objects. This prototype object is stored in the `ConstructorFunction.prototype` property.

E.g., we may rewite previous example with `b` and `c` objects using a constructor function.
Thus, the role of the object `a` (a prototype) `Foo.prototype` plays:

```js
//a constructor function
function Foo(y) {
  /* which may create objects by specified pattern: they have after creation own "y" property */
  this.y = y;
}

/*also "Foo.prototype" stores reference
to the prototype of newly created objects,
so we may use it to define shared/inherited
properties or methods, so the same as in
previous example we have: */

//inherited property "x"
Foo.prototype.x = 10;

//and inherited method "calculate"
Foo.prototype.calculate = function (z) {
  return this.x + this.y + z;
};

/* now we create our b and c objects
using "pattern" foo */
var b = new Foo(20);
var c = new Foo(30);

//call the inherited method
b.calculate(30); //60
c.calculate(40); //80

//let's show that we reference
//properties we expect

console.log(
  b.__proto__ === Foo.prototype, //true
  c.__proto__ === Foo.prototype, //true
  // also "Foo.prototype" automatically creates
  // a special property "constructor", which is a
  // reference to the constructor function itself;
  // instances "b" and "c" may found it via
  // delegation and use to check their constructor

  b.constructor === Foo, //true
  c.constructor === Foo, //true
  Foo.prototype.constructor === Foo, //true

  b.calculate === b.__proto__.calculate, //true
  b.__proto__.calculate === Foo.prototype.calculate //true
);
```

This code maybe presented as the following relationship:
![Figure 3. A constructor and object relationship.](../../Assets/constructor-proto-chain.png)
