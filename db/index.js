
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pizzaecalzones:pizzaecalzones@pizzaecalzones.w16cm.mongodb.net/pizzaecalzones?retryWrites=true&w=majority";

let connection;
try {
    connection = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    connection.connect().then(value => {
        connection = value;
    });
}catch(err) {
    console.log(err);
}

exports.get = async (database, collection, param = {}) => {
    const col = connection.db(database).collection(collection);
    return await col.find(param).toArray();
}

exports.deleteMany = async (database, collection, param = {}) => {
    const col = connection.db(database).collection(collection);
    return await col.deleteMany(param);
}

exports.insertOne = async (database, collection, param) => {
    const col = connection.db(database).collection(collection);
    return await col.insertOne(param);
}
exports.insertMany = async (database, collection, param) => {
    const col = connection.db(database).collection(collection);
    return await col.insertMany(param);
}
exports.findOneAndUpdate = async (database, collection, param, set) => {
    const col = connection.db(database).collection(collection);
    return await col.findOneAndUpdate(param, {$set: set});
}
