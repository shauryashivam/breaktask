import express from  'express'
import connectDB from './config/db.js'
import products from './data/products.js'
import colors from 'colors'
const app = express()
import dotenv from 'dotenv'
dotenv.config()


connectDB()

app.get('/',(req,res)=> {
    res.send('API is Running...')
})

app.get('/api/products',(req,res)=> {
    res.json(products)
})

app.get('/api/products/:id',(req,res)=> {
    
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 80
app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold))