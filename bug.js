const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is a common mistake. It may not work as intended due to asynchronous nature
  let result = someAsynchronousOperation();
  res.send('Hello World' + result); // result might be undefined
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function someAsynchronousOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('!');
    }, 1000);
  });
}