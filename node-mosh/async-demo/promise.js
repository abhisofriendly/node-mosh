const promise = new Promise((resolve, reject) => {
  reject(new Error('message dfdf'));
  //resolve(1);
});

promise
  .then((result) => {
    console.log('result', result);
  })
  .catch((error) => {
    console.log('reject error', error.message);
  });
