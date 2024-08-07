const mongoose = require("mongoose");
const Category = require("../models/Category");
const Product = require("../models/Product");
const ProductDetails = require("../models/ProductDetails");

//set Category in MongoDB
const setCategory = async (req, res) => {
  let category = "";
  const bodyObj = req.body;
  if (
    bodyObj.name.length < 0 &&
    bodyObj.description.length < 0 &&
    bodyObj.imageUrl.length < 0
  ) {
    res.status(400).send("Incorrect Body");
  } else {
    category = new Category({
      name: bodyObj.name,
      description: bodyObj.description,
      imageUrl: bodyObj.imageUrl,
    });
  }
  try {
    await category.save();
    res.status(201).send("New Category is added");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// get Category from mongoDB
const getCategory = async (req, res) => {
  try {
    const categories = await Category.find().exec();
    res.status(200).send(categories);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//set Product in MongoDB
const setProduct = async (req, res) => {
  let product = "";
  const bodyObj = req.body;
  if (
    bodyObj.name.length < 0 &&
    bodyObj.description.length < 0 &&
    bodyObj.imageUrl.length < 0 &&
    bodyObj.category.length < 0
  ) {
    res.status(400).send("Incorrect Body");
  } else {
    product = new Product({
      name: bodyObj.name,
      description: bodyObj.description,
      imageUrl: bodyObj.imageUrl,
      category: bodyObj.category,
      price: bodyObj.price,
      quantity: bodyObj.quantity,
    });
  }
  try {
    await product.save();
    res.status(201).send("New Product is added");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// get Product from mongoDB
const getProduct = async (req, res) => {
  try {
    const products = await Product.find().exec();
    res.status(200).send(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//set ProductDetails in MongoDB
const setProductDetails = async (req, res) => {
  let productDetails = "";
  const bodyObj = req.body;
  if (
    bodyObj.name.length < 0 &&
    bodyObj.description.length < 0 &&
    bodyObj.imageUrl.length < 0 &&
    bodyObj.category.length < 0 &&
    bodyObj.price < 0
  ) {
    res.status(400).send("Incorrect Body");
  } else {
    productDetails = new ProductDetails({
      name: bodyObj.name,
      description: bodyObj.description,
      imageUrl: bodyObj.imageUrl,
      category: bodyObj.category,
      price: bodyObj.price,
      quantity: bodyObj.quantity,
    });
  }
  try {
    await productDetails.save();
    res.status(201).send("New Product Detail is added");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// get ProductDetails from mongoDB
const getProductDetails = async (req, res) => {
  const productName = req.params.productName;
  try {
    const productDetails = await ProductDetails.find({
      name: productName,
    }).exec();
    res.status(200).send(productDetails);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  setCategory,
  getCategory,
  setProduct,
  getProduct,
  setProductDetails,
  getProductDetails,
};
