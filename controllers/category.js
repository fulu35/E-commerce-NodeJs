const { Category } = require('../models')

const getCategories = async (req, res) => {
    const categories = await Category.find()
    if (!categories) {
        res.status(500).json({ success: false })
    }
    res.send(categories)
}

const createCategories = async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
    })
    category = await category.save()

    if (!category) {
        return res.status(404).send('The category cannot be created!')
    }
    res.send(category)
}

const getCategoryById = async (req, res) => {
    const category = await Category.findById(req.params.id)

    if (!category) {
        return res
            .status(500)
            .json({ message: 'The category with the given ID was not found.' })
    }
    res.status(200).send(category);
    res.send(category);
}

const updateCategory = async (req, res) => {
    console.log(req.params.id);

    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        },
        { new: true } // Put it if you want to return the updated category
    )

    if (!category) {
        return res
            .status(404)
            .send('The category cannot be updated!')
    }

    return res.send(category)
}

const deleteCategory = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id)

    if (!category) {
        return res.status(404).send('The category cannot be deleted!')
    }

    return res
        .status(200)
        .json({ success: true, message: 'The category is deleted!' })
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategories,
    updateCategory,
    deleteCategory,
}
