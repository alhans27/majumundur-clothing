const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

const timeLog = (req, res, next) => {
    console.log(`Time: ${Date.now()}`)
    next();
};
router.use(timeLog);

router.route("/users")
    .post(userController.add);

router.route("/users/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.delete);

module.exports = router;