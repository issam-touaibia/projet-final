const express = require("express");
const {
  addProducts,
  getProducts,
  deleteProducts,
  editProducts,
  getOneProduct,
  newProducts,
} = require("../controllers/product.controller");

const roleValidation = require("../middlewares/role");
const verifyAuth = require("../middlewares/verifyAuth");

const router = express.Router();

router.get("/get_products", getProducts);
router.get("/get_products/:id", getOneProduct);
router.post(
  "/add_products",

  /* verifyAuth,
  roleValidation(["Admin"]), */
  addProducts
);
router.delete(
  "/delete_products/:id",
  verifyAuth,
  roleValidation(["Admin"]),
  deleteProducts
);
router.put(
  "/edit_products/:id",
  verifyAuth,
  roleValidation(["Admin"]),
  editProducts
);
router.get("/newProducts", newProducts);

module.exports = router;
