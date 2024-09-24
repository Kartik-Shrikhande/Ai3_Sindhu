//requiring or importing all needed dependencies
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("../src/routes/routes")
const PricingPlan = require('../src/models/model');
const cors = require('cors');
require('dotenv').config({ path: '../.env' })
app.use(cors());
app.use(express.json())

app.use('/', router);  // Make sure you point to the correct path


app.get('/pricing', async(req, res) => {
    try {
        // Fetch all pricing plans from the database
        const pricingPlans = await PricingPlan.find();
  
        // Send the fetched pricing plans as a response
         res.status(200).json(pricingPlans);
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: 'Server error', error });
    }
  })
  
mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('MongoDB is connected !!') })
    .catch((error) => { console.log(`MONGODB ERROR:${error}`) })

    
//creating server 
app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})