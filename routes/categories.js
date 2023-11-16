const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/category");
const { Category } = require("../models");

// write classic get route for categories
router.get('/', CategoryController.getCategories);
router.post('/', CategoryController.createCategories);
router.get('/:id', CategoryController.getCategoryById);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;
