const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello world'));

app.listen(3000, () => {
  console.log('REST API running on Port 3000');
});