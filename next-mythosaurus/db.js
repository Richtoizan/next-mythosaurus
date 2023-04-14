const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;
console.log("MONGODB_URI", uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }

  return client.db("mythosaurus-db");
}

export async function getDocumentById(collectionName, id) {
  const db = await connectToDB();
  const document = await db.collection(collectionName).findOne({ _id: id });
  return document;
}

export async function getAllDocuments(collectionName) {
  const db = await connectToDB();
  const documents = await db.collection(collectionName).find().toArray();
  // console.log("Fetched Documents:", documents); // log fetched documents to console
  return documents;
}

export async function getAllDocumentsWithAttribute(
  collectionName,
  attributeName,
  attributeValue,
  sortOptions = {}
) {
  const db = await connectToDB();
  const documents = await db
    .collection(collectionName)
    .find({ [attributeName]: attributeValue })
    .sort(sortOptions)
    .toArray();
  return documents;
}
