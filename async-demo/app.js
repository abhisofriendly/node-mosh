getUser(1, (data) => {
  console.log(data);
});

function getUser(id, callback) {
  setTimeout(() => {
    console.log('reading a user ');
    callback({ id: id });
  }, 5000);
}
