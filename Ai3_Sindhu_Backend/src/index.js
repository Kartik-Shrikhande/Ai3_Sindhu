//requiring or importing all needed dependencies
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("../src/routes/routes")
const userRouter = require("../src/routes/userRoutes")
// const pdfRoutes = require("../src/routes/pdfRoutes");
const chatRoutes = require('./routes/chatRoutes');


const cors = require('cors');
require('dotenv').config({ path: '.env' })
app.use(cors());
app.use(express.json())


app.use('/user', userRouter); 
app.use('/api', chatRoutes);
// app.use('/pdf', pdfRoutes);
app.use('/', router); 

app.get('/',(req,res)=>{
    res.send('Hello !! Welcome to Chat App')
})

mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('MongoDB is connected !!') })
    .catch((error) => { console.log(`MONGODB ERROR:${error}`) })

    
//creating server 
app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})