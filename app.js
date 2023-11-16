const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv/config')

// middleware
app.use(bodyParser.json())
app.use(morgan('tiny'))

// routes
const productRouter = require('./routes/products')
const orderRouter = require('./routes/orders')
const categoryRouter = require('./routes/categories')
const userRouter = require('./routes/users')

const apiUrl = process.env.API_URL

// endpoints
app.use(`${apiUrl}/products`, productRouter)
app.use(`${apiUrl}/orders`, orderRouter)
app.use(`${apiUrl}/categories`, categoryRouter)

/// Database
mongoose
    .connect(process.env.CONNECTION_STRING, {
        dbName: 'E-commerce-DB',
    })
    .then(() => {
        console.log('Database connection is ready...')
    })
    .catch((err) => {
        console.log(err)
    })

// Server
app.listen(3000, () => {
    console.log(`Server is running http://localhost:3000`)
})
