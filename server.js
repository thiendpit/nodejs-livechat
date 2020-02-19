const express = require('express');
const app = express();

const hostname = 'localhost';
const port = 3000;

app.use('/helloworld', (req, res) => {
  res.send("<h1>Hello world !!</h1>");
});

app.listen(port, hostname, () => {
  console.log(`Server listening on port ${port}`);
});
