const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute=require('./routes/product.route.js');
const app = express();


//middleware
app.use(express.json());


//routes
app.use('/api/products', productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node api");
});

mongoose
  .connect(
    "mongodb+srv://faizan2317fk:321321%40@cluster0.z7oaojk.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
