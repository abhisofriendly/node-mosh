const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('set timeout function from 1');
    resolve(1);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('set timeout function form 2');
    resolve(2);
  }, 1000);
});

Promise.all([[p1, p2]]);
