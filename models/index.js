// Write index.js file to export all models

const { Product } = require('./product');
const { Category } = require('./category');
// const { User } = require('./user');
// const { Order } = require('./order');
// do exports
module.exports = {
    Product,
    Category
};