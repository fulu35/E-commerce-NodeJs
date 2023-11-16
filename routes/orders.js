const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/order");

// write classic get route for categories
router.get("/", (req, res) => {
  res.send("Order Get");
});

module.exports = router;