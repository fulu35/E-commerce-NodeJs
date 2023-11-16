const { Product } = require('../models')

const getProducts = async (req, res) => {
    const products = await Product.find()

    if (!products || products.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'There is no product in the database.',
        })
    }

    res.send(products)
}

// Create new product
const createProduct = async (req, res) => {
    const { name, image, countInStock } = req.body
    let product = new Product({
        name,
        image,
        countInStock,
    })
    product = await product.save()

    if (!product) {
        return res.status(404).send('The product cannot be created!')
    }
    res.send(product)
}

const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (!product) {
        return res.status(500).json({ message: 'The product was not found.' })
    }
    res.status(200).send(product)
}

const updateProduct = async (req, res) => {
 const product = Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            image: req.body.image,
            countInStock: req.body.countInStock,
        },
        { new: true } // Put it if you want to return the updated product
    )

    if (!product) {
        return res.status(404).send('The product cannot be updated!');
    }

    return res.send(product);
}

const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
        return res.status(404).send('The product cannot be deleted!')
    }

    return res
        .status(200)
        .json({ success: true, message: 'The product is deleted!' })
}

module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
}
