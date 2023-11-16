const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');

router.get('/', ProductController.getProducts);
router.post('/', ProductController.createProduct);
router.get('/:id', ProductController.getProductById);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;