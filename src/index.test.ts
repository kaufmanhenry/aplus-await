import aplusAwait from './index';

const promiseWithSuccess = () => new Promise(resolve => resolve('test'));
const promiseWithError = () => new Promise((resolve, reject) => reject(new Error('error')));

describe('aplusAwait()', () => {
  it('should return a proper success', async () => {
    const [response, error] = await aplusAwait(promiseWithSuccess);
    expect(response).toEqual('test');
    expect(error).toBeUndefined();
  });
  it('should return a proper error', async () => {
    const [response, error] = await aplusAwait(promiseWithError);
    expect(error).toBeDefined();
    expect(response).toBeUndefined();
  });
});
