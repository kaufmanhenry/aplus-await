export default async function aplusAwait(promise: () => Promise<any>) {
  let response;
  let error;

  try {
    response = await promise();
  } catch (err) {
    error = err;
  }

  return [response, error];
}
