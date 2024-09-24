//requiring or importing all needed dependencies
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("../src/routes/routes")
const cors = require('cors');
require('dotenv').config({ path: '.env' })
app.use(cors({
    origin: 'https://ai3-sindhu-41ia-server-opfkx6vjp-kartik-shrikhandes-projects.vercel.app/pricing' // Replace with your frontend URL
  }));
app.use(express.json())

app.use('/', router);  // Make sure you point to the correct path


mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('MongoDB is connected !!') })
    .catch((error) => { console.log(`MONGODB ERROR:${error}`) })

    
//creating server 
app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})