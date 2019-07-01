# aplus-await [![travis-badge](https://travis-ci.org/hcjk/aplus-await.svg?branch=master)](https://travis-ci.org/hcjk/aplus-await)

A simple way of handling async/await responses with array destructuring. The original concept for this package was derived from [Promises/A+](https://promisesaplus.com).

## Install

```shell
$ yarn add aplus-await
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
const [result, error] = await aplusAwait(promise);
if (error) throw new Error(error);
console.log(result);
```

## API

When you wrap a promise with `aplusAwait`, you are guaranteed to be returned two arguments in the form of an array. The first element is the response of the promise and the second element is any error that occurred while executing the promise.

If you do not care about the error:
```js
const [result] = await aplusAwait(promise);
```

If you just want the error:
```js
const [,error] = await aplusAwait(promise);
```

If you do not want to use array destructuring:
```js
const response = await aplusAwait(promise);
// response[0] = result
// response[1] = error
```

## License

MIT © [Henry Kaufman](http://github.com/hcjk)
