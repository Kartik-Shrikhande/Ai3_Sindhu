const userModel = require('../models/userModel');
const { extractFilters } = require('../services/services');

const chatController = async (req, res) => {
  const { query } = req.body;

  try {
    // Extract filters from the user's query
    const filters = extractFilters(query);
// console.log("filters",filters);

    // Query MongoDB with the extracted filters
    const users = await userModel.find(filters);
    // console.log(users);
    
    
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found matching your criteria." });
    }

    // Return the matched users
    res.json({ message: "Here are the matching users:", total: users.length, users });
  } catch (error) {
    res.status(500).json({ message: "Error processing query", error: error.message });
  }
};

module.exports = { chatController };
