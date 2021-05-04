
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://pizzaecalzones:pizzaecalzones@pizzaecalzones.w16cm.mongodb.net/pizzaecalzones?retryWrites=true&w=majority";

let connection;

exports.getConnection = async (database, collection) => {
    try {
        if (connection) {
            return connection.db(database).collection(collection);
        } else {
            connection = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            connection = await connection.connect();
            return connection.db(database).collection(collection);
        }
    } catch (e) {
        console.log('Erreur in getConnection ' + e.message);
     }
};

exports.get = async (database, collection, param = {}) => {
    const col = await this.getConnection(database, collection);
    return await col.find(param).toArray();
}

exports.deleteMany = async (database, collection, param = {}) => {
    const col = await this.getConnection(database, collection);
    return await col.deleteMany(param);
}

exports.insertOne = async (database, collection, param) => {
    const col = await this.getConnection(database, collection);
    return await col.insertOne(param);
}
exports.insertMany = async (database, collection, param) => {
    const col = await this.getConnection(database, collection);
    return await col.insertMany(param);
}
exports.findOneAndUpdate = async (database, collection, param, set) => {
    const col = await this.getConnection(database, collection);
    return await col.findOneAndUpdate(param, {$set: set});
}
