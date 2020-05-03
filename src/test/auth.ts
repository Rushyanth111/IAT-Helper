import 'regenerator-runtime/runtime.js';

import fetch from 'node-fetch';

describe('Authentication Testing', function() {
  // eslint-disable-next-line no-invalid-this
  this.timeout(5000);
  it('Authentication Registration', function() {
    return new Promise(async (resolve, reject) => {
      const rest = await fetch('http://localhost:10000/register', {
        method: 'POST',
        body: JSON.stringify({
          username: 'xavier',
          password: '1234',
          email: '123@123',
          accountType: 1,
        }),
      });

      if (rest.status == 200) {
        resolve();
      } else {
        reject(new Error('Something went wrong!'));
      }
    });
  });

  it('Authentication Request', function() {
    return new Promise(async (resolve, reject) => {
      let res = await fetch('http://localhost:10000/auth', {
        method: 'POST',
        body: JSON.stringify({
          haha: 'something',
        }),
      });

      if (res.status === 400) {
        reject(new Error('Error'));
      }

      res = await res.json();

      resolve();
    });
  });
});
