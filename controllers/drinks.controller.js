const Drinks = require('../models/drinks.model')

module.exports.drinksController = {
    getDrinks: (req, res) => {
        Drinks.find().select({name: req.body.name, price: req.body.price}).then((data)=> {res.json(data)})
        .catch((err)=>{res.json(err.message)})
    },

    postDrink: (req, res) => {
        Drinks.create({
            name: req.body.name,
            price: req.body.price,
            isAvailable: req.body.isAvailable,
            isCoffeineFree: req.body.isCoffeineFree,
            size: req.body.size,
            about: req.body.about

        }).then(()=>{res.json('Напиток добавлен')}).catch((err)=>{res.json(err.message)})
    },

    patchDrink: (req, res) => {
        Drinks.findByIdAndUpdate(
            req.params.id, {
                name: req.body.name, 
                price: req.body.price,
                isAvailable: req.body.isAvailable, 
                isCoffeineFree: req.body.isCoffeineFree,
                size: req.body.size,
                about: req.body.about
            }).then(()=>{res.json('Напиток изменен')}).catch((err)=>{res.json(err.message)})
    },

    deleteDrinks: (req, res) => {
        Drinks.findByIdAndRemove(req.params.id).then(()=>(res.json('Напиток удален'))).catch((err)=>{res.json(err.message)})
    },

    getDrinksById: (req, res) => {
        Drinks.findById(req.params.id).then((data)=>{res.json(data)}).catch((err)=>{res.json(err.message)})
    },
    getAvailableDrinks: (req, res) => {
        Drinks.find({isAvailable: true }).then((data)=>{res.json(data)}).catch((err)=>{res.json(err.message)})
    }
}