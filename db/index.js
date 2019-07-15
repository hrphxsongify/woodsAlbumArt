const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost/albumArt', (err, db) => {
  if (err) throw err;
  const dbo = db.db("albumArt");

  for (let i = 0; i < 100; i++) {
    let url = 'https://maxsart.s3.us-east-2.amazonaws.com/img' + i + '.jpg';
    let myobj = {
      _id: i,
      img: url
    };

    dbo.collection("imgs").insertOne(myobj, (error, res) => {
      if (error) throw error;
      console.log("1 document inserted");
      db.close();
    });
  }

  let getOne = (index, callback) => {
    console.log('here');

    dbo.collection("imgs").find({
      _id: 0
    }).sort({
      forks: -1
    }).limit(25).exec((err, data) => {
      callback(data);
    });
  }
});

module.exports = getOne;