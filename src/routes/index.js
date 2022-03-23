var express = require("express");
var router = express.Router();
const userRouter = require("../controllers/users/routes");
const bookRouter = require("../controllers/books/routes");
/* GET home page. */
router.use("/users", userRouter);
router.use("/books", bookRouter);
module.exports = router;
