//requiring or importing all needed dependencies
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const router = require("../src/routes/routes")
const userRouter = require("../src/routes/userRoutes")
const pdfRoutes = require("../src/routes/pdfRoutes");
const chatRoutes = require('./routes/chatRoutes');


const cors = require('cors');
require('dotenv').config({ path: '.env' })
app.use(cors());
app.use(express.json())


app.use('/user', userRouter); 
app.use('/api', chatRoutes);
app.use('/pdf', pdfRoutes);
app.use('/', router); 

// OpenAI API call function
async function searchChatGPT(query) {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-4",
          messages: [{ role: "user", content: query }]
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          }
        }
      );
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error with OpenAI API request:", error.response ? error.response.data : error.message);
      throw new Error("API request failed");
    }
  }

// Search API endpoint
app.get('/search', async (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).send("Query parameter 'q' is required.");
  }

  try {
    const result = await searchChatGPT(q);
    res.send({ searchResult: result });
  } catch (error) {
    res.status(500).send({ error: "Something went wrong with the API request" });
  }
});
console.log(process.env.OPENAI_API_KEY);

mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log('MongoDB is connected !!') })
    .catch((error) => { console.log(`MONGODB ERROR:${error}`) })

    
//creating server 
app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})