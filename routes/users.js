const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

// write classic get route for categories
router.get("/", (req, res) => {
  res.send("User Get");
});

module.exports = router;