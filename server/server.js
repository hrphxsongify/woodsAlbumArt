const express = require('express');

const db = require('../db/index.js');

const app = express();
app.use(express.static(__dirname + '/../client'));

const port = 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/', async (req, res) => {});