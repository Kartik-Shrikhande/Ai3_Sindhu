const PricingPlan = require('../models/model');

const userModel = require('../models/userModel')

// Controller for creating a new pricing plan
// const createPricingPlan = async (req, res) => {
//   try {
//     const { price, planType } = req.body;

//     // Validate the request body
//     if (!price || !planType) {
//       return res.status(400).json({ message: 'Price and Plan Type are required' });
//     }

//     // Create a new pricing plan
//     const newPlan = new PricingPlan({
//       price,
//       planType,
//     });

//     // Save the pricing plan to the database
//     await newPlan.save();

//     // Send success response
//     res.status(201).json({ message: 'Pricing Plan created successfully', newPlan });
//   } catch (error) {
//     // Handle errors
//     res.status(500).json({ message: 'Server error', error });
//   }
// };

const createPricingPlan = async (req, res) => {
  try {
      const pricingPlans = [
          {
              price: 180,
              planType: 'Business',
              description: 'Perfect for private individuals',
              // features: ['Feature 1', 'Feature 2', 'Feature 3'],
          },
          {
              price: 200,
              planType: 'Premium',
              description: 'Perfect for private companies',
             
          },
      ];

      // Optionally check for existing plans
      const existingPlans = await PricingPlan.find({ planType: { $in: pricingPlans.map(p => p.planType) } });
      if (existingPlans.length) {
          return res.status(400).json({ message: 'Some plans already exist.' });
      }

      // Insert multiple pricing plans
      const createdPlans = await PricingPlan.insertMany(pricingPlans);
      res.status(201).json(createdPlans);
  } catch (error) {
      res.status(500).json({ message: 'Server error', error });
  }
};


// const createPricingPlan = async (req, res) => {
//   try {
//       const pricingPlans = [
//           { price: 18, planType: 'business' },
//           { price: 200, planType: 'premium' },
//       ];

//       // Insert multiple pricing plans
//       const createdPlans = await PricingPlan.insertMany(pricingPlans);
//       res.status(201).json(createdPlans);
//   } catch (error) {
//       res.status(500).json({ message: 'Server error', error });
//   }
// }



// const getPricingPlans = async (req, res) => {
//   try {
//     // Fetch all pricing plans from the database
//     const pricingPlans = await PricingPlan.find(); // Assuming you're using Mongoose

//     // Send the fetched pricing plans as a response
//     res.status(200).json(pricingPlans);
//   } catch (error) {
//     // Handle errors
//     res.status(500).json({ message: 'Server error', error });
//   }
// };


// User Registration
const registerUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if the user already exists
    const userExists = await userModel.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user (without password hashing)
    const user = new userModel({
        email,
        password, // Storing password directly without hashing
    });

    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
};

// User Login
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Directly compare the password (no hashing involved)
    if (password !== user.password) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
};

module.exports = {
    registerUser,
    loginUser,
    createPricingPlan,
    // getPricingPlans
};


