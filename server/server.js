const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const AlbumArt = require('../db/index');


const app = express();
// app.use(express.static(__dirname + '/../client'));

const port = 3001;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(express.static('../client/dist'));

app.get('/script', async (req, res) => {
  res.sendFile(await path.join(__dirname, '../client/dist/bundle.js'));
})

app.get('/api/album/:albumArtId', async (req, res) => {
  console.log('here');
  res.send(await AlbumArt.find({
    _id: parseInt(req.params.albumArtId, 10)
  }).exec());
});

app.get('/album/:albumArtId', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});