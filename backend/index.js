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
    const products = await Product.find();

    res.send(products);
});
app.get('/products/:id', async (req, res, next) => {
    const prodId = req.params.id;
    const products = await Product.find({ _id: prodId });
    res.send(products);
});

app.post('/products', (req, res, next) => {
    const product = new Product(req.body);
    product.save()
        .then(result => {
            const data = JSON.stringify("POSTED DATA");
            res.send(data);
        })

})

app.delete('/products/:id', async (req, res, next) => {
    try {
        const prodId = req.params.id;
        const result = await Product.deleteOne({ _id: prodId })

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
        const result = await Product.updateOne({ _id: prodId }, { $set: data });// set is basically used to tell which fields we want to update



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