const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  let result = await someAsynchronousOperation();
  res.send('Hello World' + result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function someAsynchronousOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('!');
    }, 1000);
  });
}
