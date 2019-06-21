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

## License

MIT © [Henry Kaufman](http://github.com/hcjk)
