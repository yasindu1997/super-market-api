const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const db = client.db('super-market');
const collection = db.collection('customer');

const saveCustomer = async (req, res) => {
    const insertResult = await collection.insertOne(req.body);
    res.send(insertResult);
}

const getAllCustomers = async (req, res) => {
    const findResult = await collection.find({}).toArray();
    res.send(findResult);
}

const deleteCustomer = async (req, res) => {
    const deleteResult = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send(deleteResult);
}

const updateCustomer = async (req, res) => {
    const updateResult = await collection.updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
    res.send(updateResult);
}

const getCustomerById = (req, res) => {

}

module.exports = { saveCustomer, getAllCustomers, deleteCustomer, updateCustomer, getCustomerById }