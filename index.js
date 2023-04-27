const express = require('express');
const server = express();

const port = 3000;

server.get('/heartbeat', (req, res) => {
  res.send('heartbeat');
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});