var MongoClient = require('mongodb').MongoClient;
var configVariables = require('../src/variables/config')
var uri = configVariables.DatabaseConfig.uri
var db = configVariables.DatabaseConfig.db


exports.getcontent = function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let id = req.query.id
  MongoClient.connect(uri, function(err, client) {
    client.db(db).collection('session').find({contentId: id}).toArray().then(docs => {
      client.close();
      console.log(docs)
      res.send(docs)
    });
  });
}
