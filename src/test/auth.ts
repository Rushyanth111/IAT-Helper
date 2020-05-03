import 'regenerator-runtime/runtime.js';

import fetch from 'node-fetch';

it('Authentication Request', async (done) => {
  let res = await fetch('http://localhost:10000/auth', {
    method: 'POST',
    body: JSON.stringify({
      haha: 'something',
    }),
  });

  res = await res.json();

  return res;
  done();
});
