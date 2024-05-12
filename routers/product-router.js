const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

const timeLog = (req, res, next) => {
    console.log(`Time: ${Date.now()}`)
    next();
};
router.use(timeLog);

router.route("/products")
    .get(productController.index)
    .post(productController.add);

router.route("/products/:id")
    .get(productController.findById)
    .put(productController.update)
    .delete(productController.delete);

module.exports = router;