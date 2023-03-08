const express = require("express");
const cors = require("cors")
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/connectDB");
const product = require("./routes/product");
const panier = require("./routes/panier");
const user = require("./routes/user");
const app = express();
app.use(cors())
app.use(express.json());
app.use("/user", user);
app.use("/product", product);
app.use("panier", panier);
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server runnig on port ${PORT}`)
);
