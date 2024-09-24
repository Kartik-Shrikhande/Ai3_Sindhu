const express = require("express")
const router = express.Router()
const  planController= require('../controllers/controller');

router.post('/create',planController.createPricingPlan);
router.post('/register',planController.registerUser);

// Login user
router.post('/login',planController.loginUser);
// router.get('/pricing', planController.getPricingPlans);

module.exports = router;