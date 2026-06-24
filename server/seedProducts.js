require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Product = require('./models/Product');

function parsePrice(priceStr) {
  // "$2,000" -> 2000, "$80000" -> 80000
  return Number(String(priceStr).replace(/[$,]/g, ''));
}


const { MongoClient, ServerApiVersion } = require('mongodb');

//const uri = "mongodb+srv://joe:Password88888!@cluster0.xxxxx.mongodb.net/e1?retryWrites=true&w=majority"
//const uri = "mongodb+srv://joe:<db_password>@cluster0.4tf3suo.mongodb.net/?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri = process.env.DATABASE_URL_ATLAS;

console.log("Loaded DATABASE_URL_ATLAS:", process.env.DATABASE_URL_ATLAS);


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //const uri = process.env.DATABASE_URL_ATLAS;
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



async function seed() {
  //const uri = 'mongodb://127.0.0.1:27017/e1';
  const uri = process.env.DATABASE_URL_ATLAS || 'mongodb://127.0.0.1:27017/e1';
  console.log('DATABASE_URL from env:', uri);
  console.log('Using URI:', uri);
  await mongoose.connect(uri);

  // adjust path if your json lives elsewhere
  const filePath = path.resolve(__dirname, '../e-commerce-frontend/src/data/mockProducts.json');
  const products = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const cleaned = products.map(p => ({
    ...p,
    price: parsePrice(p.price),
  }));

  // so you can run it repeatedly without duplicates:
  await Product.deleteMany({});
  await Product.insertMany(cleaned);

  console.log(`✅ Seeded ${cleaned.length} products into DB: ${mongoose.connection.name}`);
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});

