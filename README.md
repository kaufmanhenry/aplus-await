# two-arg-promise [![travis-badge](https://travis-ci.org/hcjk/two-arg-promise.svg?branch=master)](https://travis-ci.org/hcjk/two-arg-promise)

A simple way of handling promise responses with array destructuring.

## Install

```shell
$ yarn add two-arg-promise
```

## Usage
```js
// Instead of writing
let result;
try {
  result = await promise();
} catch (error) {
  throw new Error(error);
}
console.log(result);

// You can write
const [result, error] = await twoArgPromise(promise);
if (error) throw new Error(error);
console.log(result);
```

## API

When you wrap a promise with `twoArgPromise`, you are guaranteed to be returned two arguments in the form of an array. The first element is the response of the promise and the second element is any error that occurred while executing the promise.

If you do not care about the error:
```js
const [result] = await twoArgPromise(promise);
```

If you just want the error:
```js
const [,error] = await twoArgPromise(promise);
```

If you do not want to use array destructuring:
```js
const response = await twoArgPromise(promise);
// response[0] = result
// response[1] = error
```

## License

MIT © [Henry Kaufman](http://github.com/hcjk)
