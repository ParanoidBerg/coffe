const { Router } = require("express");
const { drinksController } = require("../controllers/drinks.controller");
const router = Router();

router.get('/drinks', drinksController.getDrinks)
router.get('/drinks/in-stock', drinksController.getAvailableDrinks)
router.get('/drinks/:id', drinksController.getDrinksById)
router.post('/drinks', drinksController.postDrink)
router.delete('/drinks/:id', drinksController.deleteDrinks)
router.patch('/drinks/:id', drinksController.patchDrink)


module.exports = router