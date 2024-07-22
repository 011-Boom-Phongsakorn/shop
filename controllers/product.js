const Product = require('../models/Product')

exports.read = async (req, res) => {
    try{
        const id = req.params.id
        const get = await Product.findOne({ _id: id }).exec();
        res.send(get)
    }catch(e){
        console.log(e)
        res.status(500).send({ error: e.message })
    }
}

exports.list = async (req, res) => {
    try{
        const gets = await Product.find({}).exec()
        res.send(gets)
    }catch(e){
        console.log(e)
        res.status(500).send({ error: e.message })
    }
}

exports.create = async (req, res) => {
    try{
        console.log(req.body)
        const created = await Product(req.body).save()
        res.send(created)
    }catch(e){
        console.log(e)
        res.status(500).send({ error: e.message })
    }
}

exports.update = async (req, res) => {
    try{
        const id = req.params.id
        const updated = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true }).exec();
        res.send(updated)
    }catch(e){
        console.log(e)
        res.status(500).send({ error: e.message })
    }
}

exports.remove = async (req, res) => {
    try{
        const id = req.params.id
        const removed = await Product.findOneAndDelete({ _id: id}).exec();
        res.send(removed)
    }catch(e){
        console.log(e)
        res.status(500).send({ error: e.message })
    }
}