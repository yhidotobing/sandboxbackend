const express = require("express");
const router = express.Router();

const createController = require("./create.booksController");
const readController = require("./read.booksController");
const updateController = require("./update.booksController");
const deleteController = require("./delete.booksController");

router.post("/", createController.service);
router.get("/", readController.service);
router.put("/", updateController.service);
router.delete("/", deleteController.service);

module.exports = router;
