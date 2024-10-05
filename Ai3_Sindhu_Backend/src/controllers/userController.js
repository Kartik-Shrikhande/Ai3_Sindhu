const userModel = require('../models/userModel');

const createUser = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        age,
        gender,
        dateOfBirth,
        religion,
        city,
        state,
        country,
        maritalStatus,
        education,
        profession,
        height,
        bio
      } = req.body;
      
      const existingUser = await userModel.findOne({ email });

      if (existingUser)
    {
          return res.status(400).json({ message: "Email already exists" });
      }
      const newUser = userModel.create (req.body);
  
     return res.status(201).json({ message: "User created successfully", user:newUser });
    } catch (error) {
      res.status(500).json({ message: "Error creating user"})
    }
}




 const filterUser = async (req, res) => {
    try {
      const {
        age,
      minAge,
      maxAge,
      gender,
      height,
      minHeight,
      maxHeight,
      religion,
      city,
      state,
      maritalStatus
      } = req.query; 
  
    
      const filter = {};
    
   
     if (age) {
      filter.age = age;
    } else {
      if (minAge && maxAge) {
        filter.age = { $gte: minAge, $lte: maxAge }; 
      } else if (minAge) {
        filter.age = { $gte: minAge }; 
      } else if (maxAge) {
        filter.age = { $lte: maxAge }; 
      }
    }
  

    if (height) {
      filter.height = height;
    } else {
      if (minHeight && maxHeight) {
        filter.height = { $gte: minHeight, $lte: maxHeight }; 
      } else if (minHeight) {
        filter.height = { $gte: minHeight };
      } else if (maxHeight) {
        filter.height = { $lte: maxHeight };
      }
    }

    
    //   if (age) filter.age = age;
      if (gender) filter.gender = gender; 
    //   if (height) filter.height = height; 
      if (religion) filter.religion = religion; 
      if (city) filter.city = city; 
      if (state) filter.state = state; 
      if (maritalStatus) filter.maritalStatus = maritalStatus;
  
      const users = await userModel.find(filter);
  
      if (users.length === 0) {
        return res.status(404).json({ message: "No users found matching the criteria"});
      }
  
      res.status(200).json({ message: "Filtered users retrieved successfully",total:users.length, users:users });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving users", error: error.message });
    }
  }



  module.exports={createUser,filterUser}