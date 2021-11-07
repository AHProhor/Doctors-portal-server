const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config()
const { MongoClient } = require('mongodb');
const port = process.env.PORT || 5000;

// middlwear
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nbt3a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run(){
    try{
        await client.connect();
        console.log('database Connected')
    }
    finally{
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', function (req, res) {
  res.send('This doctors portal server');
})
app.listen(port,()=>{
    console.log(`Doctors server open on port :`,port);
})