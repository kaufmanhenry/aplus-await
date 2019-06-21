import twoArgPromise from './index';

const promiseWithSuccess = () => new Promise(resolve => resolve('test'));
const promiseWithError = () => new Promise((resolve, reject) => reject(new Error('error')));

describe('twoArgPromise()', () => {
  it('should return a proper success', async () => {
    const [response, error] = await twoArgPromise(promiseWithSuccess);
    expect(response).toEqual('test');
    expect(error).toBeUndefined();
  });
  it('should return a proper error', async () => {
    const [response, error] = await twoArgPromise(promiseWithError);
    expect(error).toBeDefined();
    expect(response).toBeUndefined();
  });
});
