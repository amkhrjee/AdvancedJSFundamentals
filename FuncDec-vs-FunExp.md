## Function Declaration

Function declarations are always hoisted to the top of the JavaScript file.

```js
declaration(); //also works
function declaration() {
  console.log("declaration");
}

declaration(); //works
```

## Function Expression

```js

functionExpression() //doesn't work

const functionExpression = function(){
    console.log('expression)
}

functionExpression() //works

```
