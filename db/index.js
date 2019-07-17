const mongoose = require('mongoose');

// const MongoClient = require('mongodb').MongoClient;


mongoose.connect('mongodb://localhost:27017/albumArt', {
  useNewUrlParser: true
});

// const Client = MongoClient.connect('mongodb://localhost:27017/albumArt', (err, db) => {
//   if (err) throw err;
//   const dbo = db.db("albumArt");

//   for (let i = 0; i < 100; i++) {
//     let url = 'https://maxsart.s3.us-east-2.amazonaws.com/s' + i + '.jpg';
//     let myobj = {
//       _id: 200 + i,
//       img: url
//     };

//     dbo.collection("imgs").insertOne(myobj, (error, res) => {
//       if (error) {
//         // console.log('duplicate')
//       } else {
//         console.log("1 document inserted");
//       }
//       db.close();
//     });
//   }

// });

const artSchema = new mongoose.Schema({
  _id: Number,
  img: String
})

const AlbumArt = mongoose.model('albumArt', artSchema, 'imgs');

module.exports = AlbumArt;