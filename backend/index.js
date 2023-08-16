const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');
const cors = require('cors');
const app = express();



mongoose.connect('mongodb://localhost:27017/pms')
    .then(result => {
        console.log("Connected");
    })

app.use(express.json());

app.use(cors());
app.get('/products', async (req, res, next) => {
    try {
        const products = await Product.find();

        res.send(products);
    } catch (error) {
        console.log(error);
    }
});
app.get('/products/:id', async (req, res, next) => {
    try {
        const prodId = req.params.id;
        const products = await Product.findById(prodId);
        console.log(products);
        res.send(products);
    } catch (error) {
        console.log(error);
    }
});

app.post('/products', async (req, res, next) => {
    try {
        const product = new Product(req.body);
        await product.save()

        const data = JSON.stringify("POSTED DATA");
        res.send(data);

    } catch (error) {
        console.log(error)
    }

})

app.delete('/products/:id', async (req, res, next) => {
    try {
        const prodId = req.params.id;
        const result = await Product.findByIdAndDelete(prodId)

        res.send("Product deleted");
    }
    catch (err) {
        console.log(err);
    }

})
app.put('/products/:id', async (req, res, next) => {
    try {
        const prodId = req.params.id;
        const data = req.body;
        const result = await Product.updateOne({ _id: prodId }, { $set: data });


        res.send({ message: "Product updated" });
    }
    catch (Error) {
        console.log(Error);
    }

})






app.get('/:anydata ', (req, res, next) => {
    res.send("Error");
})
app.listen(8000, () => {
    console.log('Server is running');
});