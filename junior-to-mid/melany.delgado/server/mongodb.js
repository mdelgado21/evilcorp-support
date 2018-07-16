const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/support';
let _db;

const connectDB = async callback => {
  try {
    MongoClient.connect(
      uri,
      (err, db) => {
        _db = db;
        return callback(err);
      }
    );
  } catch (e) {
    throw e;
  }
};

const getDB = () => _db;

const insertCollection = (model, data) => _db.collection(model).insertOne(data);

const disconnectDB = () => _db.close();

module.exports.MongoDB = { connectDB, getDB, disconnectDB, insertCollection };
