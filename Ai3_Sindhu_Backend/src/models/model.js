// models/PricingPlan.js

const mongoose = require('mongoose');

const pricingPlanSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  planType: {
    type: String,
    enum: ['Business', 'Premium'],
    required: true,
  },
  description: {
    type: String,
  }
});

const PricingPlan = mongoose.model('PricingPlan', pricingPlanSchema);

module.exports = PricingPlan;
