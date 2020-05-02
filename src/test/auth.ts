import 'regenerator-runtime/runtime.js';

import fetch from 'node-fetch';

describe('Authentication Request', async (done) => {
  let res = await fetch('http://localhost:3000', {
    method: 'post',
    body: JSON.stringify({
      haha: 'something',
    }),
  });

  res = await res.json();

  return res;
  done();
});
