const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Category = require('./models/Category');
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://wwalia1013:UPbAJjQnwlwW69Vs@cluster0.bsyn2br.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connection Created Successfully'))
  .catch(err => console.log(err));

// get Category
app.get('/product/category', async (req, res) => {
    try {
        const products = await Category.find();
        res.send(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`API is on PORT ${PORT}`));