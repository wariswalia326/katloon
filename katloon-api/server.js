const {
  setCategory,
  getCategory,
  setProduct,
  getProduct,
  setProductDetails,
  getProductDetails,
} = require("./controller/monolithic");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(express.json());
app.use("/content", express.static(path.join(__dirname, "pictures")));
app.post("/katloon/category", setCategory);
app.get("/katloon/category", getCategory);
app.post("/katloon/product", setProduct);
app.get("/katloon/product", getProduct);
app.post("/katloon/productDetails", setProductDetails);
app.get("/katloon/product/:productName", getProductDetails);

// MongoDB connection
mongoose
  .connect(
    'mongodb+srv://wwalia1013:UPbAJjQnwlwW69Vs@cluster0.bsyn2br.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connection Created Successfully"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`API is on PORT ${PORT}`));
