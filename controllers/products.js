const Product = require("../models/products");

module.exports = {
    index: (req,res) => {
        Product.find()
            .then((products)=>{
                res.status(200);
                res.json({
                    status: "OK",
                    data: products,
                });
            })
            .catch((error)=>{
                res.json({
                    status: "ERROR",
                    message: `error message: "${error}"`,
                });
            });
    },
    findById: (req, res) => {
        const id = req.params.id;
        Product.findById({_id: id})
            .then((product)=>{
                res.status(200);
                res.json({
                    status: "OK",
                    data: product,
                });
            })
            .catch((error)=>{
                res.json({
                    status: "ERROR",
                    message: `error message: "${error}"`,
                });
            });
    },
    add: (req, res) => {
        const product = new Product({
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price,
            stock: req.body.stock,
            merchantId: req.body.merchantId,
        });
        product.save()
            .then(()=>{
                    res.status(201);
                    res.json({
                        status: "CREATED",
                        message: "successfully insert new product",
                        data: [req.body],
                    });
            })
            .catch((error)=>{
                res.json({
                    status: "ERROR",
                    message: `error message: "${error}"`,
                });
            });
    },
    update: (req, res) => {
        const product = {
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price,
            stock: req.body.stock,
        };
        const id = req.params.id;
        
        Product.findOneAndUpdate({_id : id}, product, {returnDocument:'after'})
            .then((product)=>{
                res.status(201);
                res.json({
                    status: "UPDATED",
                    data: product,
                });
            })
            .catch((error)=>{
                res.json({
                    status: "ERROR",
                    message: `error message: "${error}"`,
                });
            });
    },
    delete: (req, res) => {
        const id = req.params.id;
        Product.deleteOne({_id: id})
            .then(()=>{
                res.status(200);
                res.json({
                    status: "OK",
                    message: `successfully deleted product with ID "${id}"`,
                });
            })
            .catch((error)=>{
                res.json({
                    status: "ERROR",
                    message: `error message: "${error}"`,
                });
            });
    },
}