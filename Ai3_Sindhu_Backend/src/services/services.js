const extractFilters = (query) => {
  const filters = {};
  
  // Convert query to lowercase to simplify matching
  const lowerCaseQuery = query.toLowerCase();

  // Extract gender from query
  if (lowerCaseQuery.includes('female')) {
    filters.gender = 'Female';
  } else if (lowerCaseQuery.includes('male')) {
    filters.gender = 'Male';
  } else if (lowerCaseQuery.includes('other')) {
    filters.gender = 'Other';
  }

  // Extract age range
  const ageMatch = lowerCaseQuery.match(/age between (\d+) and (\d+)/);
  if (ageMatch) {
    const minAge = parseInt(ageMatch[1], 10);
    const maxAge = parseInt(ageMatch[2], 10);
    filters.age = { $gte: minAge, $lte: maxAge };
  }

  // Extract minAge and maxAge separately if present
  const minAgeMatch = lowerCaseQuery.match(/min age (\d+)/);
  const maxAgeMatch = lowerCaseQuery.match(/max age (\d+)/);
  if (minAgeMatch) {
    filters.age = { ...filters.age, $gte: parseInt(minAgeMatch[1], 10) };
  }
  if (maxAgeMatch) {
    filters.age = { ...filters.age, $lte: parseInt(maxAgeMatch[1], 10) };
  }

  // Extract height
  const heightMatch = lowerCaseQuery.match(/height (\d+)/);
  if (heightMatch) {
    filters.height = parseInt(heightMatch[1], 10);
  }

  // Extract minHeight and maxHeight
  const minHeightMatch = lowerCaseQuery.match(/min height (\d+)/);
  const maxHeightMatch = lowerCaseQuery.match(/max height (\d+)/);
  if (minHeightMatch) {
    filters.height = { ...filters.height, $gte: parseInt(minHeightMatch[1], 10) };
  }
  if (maxHeightMatch) {
    filters.height = { ...filters.height, $lte: parseInt(maxHeightMatch[1], 10) };
  }

  // Extract religion
  const religionMatch = lowerCaseQuery.match(/religion (\w+)/);
  if (religionMatch) {
    filters.religion = religionMatch[1].charAt(0).toUpperCase() + religionMatch[1].slice(1); // Capitalize religion
  }

  // Extract city
  const cityMatch = lowerCaseQuery.match(/city (\w+)/);
  if (cityMatch) {
    filters.city = cityMatch[1].charAt(0).toUpperCase() + cityMatch[1].slice(1); // Capitalize city
  }

  // Extract state
  const stateMatch = lowerCaseQuery.match(/state (\w+)/);
  if (stateMatch) {
    filters.state = stateMatch[1].charAt(0).toUpperCase() + stateMatch[1].slice(1); // Capitalize state
  }

   // Extract country
   const countryMatch = lowerCaseQuery.match(/country (\w+)/);
   if (countryMatch) {
     filters.country = countryMatch[1].charAt(0).toUpperCase() + countryMatch[1].slice(1); // Capitalize country
   }
   
  // Extract marital status
  if (lowerCaseQuery.includes('single')) {
    filters.maritalStatus = 'Single';
  } else if (lowerCaseQuery.includes('divorced')) {
    filters.maritalStatus = 'Divorced';
  } else if (lowerCaseQuery.includes('widowed')) {
    filters.maritalStatus = 'Widowed';
  }

  return filters;
};

module.exports = { extractFilters };





// const extractFilters = async (query) => {
//   const apiKey = '4e2ee0b5a2c74f149142ec22a53f804f';
//   const endpoint = 'https://mh.openai.azure.com/'; 
//   // Example: https://<your-resource-name>.openai.azure.com/openai/deployments/<deployment-name>/chat/completions

//   try {
//     const response = await axios.post(endpoint, {
//       messages: [{ role: 'user', content: query }],
//       temperature: 0.7,
//       max_tokens: 150,
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`,
//       },
//     });


//     const filters = JSON.parse(response.data.choices[0].message.content);
//     return filters;

//   } catch (error) {
//     console.error("Error extracting filters:", error.message);
//     throw error;
//   }
// };

// module.exports = { extractFilters };


