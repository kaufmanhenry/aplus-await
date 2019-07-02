const aplusAwait = async (promise: Promise<any>) => {
  let response;
  let error;

  try {
    response = await promise;
  } catch (err) {
    error = err;
  }

  return [response, error];
};

export = aplusAwait;
