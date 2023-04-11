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

export async function getGodByName(name) {
  const db = await connectToDB();
  const god = await db.collection("gods").findOne({ name });
  return god;
}
