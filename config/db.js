const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/cardShop')
        console.log(`DB connected`)
    }catch(e){
        console.log(e)
    }
}

module.exports = connectDB