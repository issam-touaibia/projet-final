const Panier = require("../models/Panier");
const Product = require("../models/Product");

exports.get_panier_items = async (req, res) => {
  const userId = req.params.id;
  try {
    let panier = await Panier.findOne({ userId });
    if (panier && panier.items.length > 0) {
      res.send(panier);
    } else {
      res.send(null);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Somthing went wrong");
  }
};
