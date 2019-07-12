const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/albums');


const albumSchema = mongoose.Schema({
  _id: Number,
  img: String
});

const Album = mongoose.model('Repo', albumSchema);

module.exports = Album;