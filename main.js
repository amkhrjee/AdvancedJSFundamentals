// Create an anonymous function expression that gets invoked immediately,
// and assign its *return value* to a variable. This approach "cuts out the
// middleman" of the named `makeWhatever` function reference.
//
// As explained in the above "important note," even though parens are not
// required around this function expression, they should still be used as a
// matter of convention to help clarify that the variable is being set to
// the function's *result* and not the function itself.

var counter = (function () {
  var i = 0;

  return {
    get: function () {
      return i;
    },

    set: function (val) {
      i = val;
    },

    increment: function () {
      return ++i;
    },
  };
})();

// `counter` is an object with properties, which in this case happen to be

// methods.

counter.get(); // 0

counter.set(3);

counter.increment(); // 4

counter.increment(); // 5

counter.i; // undefined (`i` is not a property of the returned object)

i; // ReferenceError: i is not defined (it only exists inside the closure)
