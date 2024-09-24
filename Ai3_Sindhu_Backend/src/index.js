//requiring or importing all needed dependencies
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("./routes/routes")
const cors = require('cors');
require('dotenv').config({ path: '.env' })
app.use(cors());
app.use(express.json())

app.use('/', router);  // Make sure you point to the correct path

// app.use('/',router)
//connecting mongodb with nodejs
mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('MongoDB is connected !!') })
    .catch((error) => { console.log(`MONGODB ERROR:${error}`) })

    
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });
//creating server 
app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})