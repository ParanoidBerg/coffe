const req = require('express/lib/request')
const mongoose = require('mongoose')

const drinksSchema = mongoose.Schema({
    name: String,
    price: Number,
    isAvailable: {
        type: Boolean,
        default: true
    },
    isCoffeineFree: {
        type: Boolean,
        default: false
    },
    size: String,
    about: String,
    

})

const Drinks = mongoose.model('Drinks', drinksSchema)

module.exports = Drinks

