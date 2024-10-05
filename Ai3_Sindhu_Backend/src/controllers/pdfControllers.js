// const fs = require('fs');
// const pdf = require('pdf-parse');
// const path = require('path');
// const PDFModel = require('../models/pdfModel');
// const pdfModel = require('../models/pdfModel');


// exports.uploadPDF = async (req, res) => {
//   const file = req.file;
//   if (!file) {
//     return res.status(400).json({ message: 'Please upload a PDF file' });
//   }

//   const filePath = path.join(__dirname, '../../uploads', file.filename);
//   const dataBuffer = fs.readFileSync(filePath);

//   try {
//     const pdfData = await pdf(dataBuffer);
//     const pdfJson = {
//       title: file.originalname,  
//       text: pdfData.text,
//     };

   
//     const pdfDocument = new PDFModel(pdfJson);
//     await pdfDocument.save();
//     res.status(201).json({ message: 'PDF data saved', data: pdfDocument });
//   } 
//   catch (err) {
//     console.error('Error parsing PDF:', err);
//     res.status(500).json({ message: 'Error processing the PDF' });
//   }
// };

// exports.getAllPDFs = async (req,res)=>{
//   try{
//     const getData = await pdfModel.find()
//     res.status(200).json({total:getData.length,data:getData});
//   }
//   catch(error){
//     return res.status(500).send({status:false ,message:error.message})
//   }
// }




// // Function to handle fetching a PDF by its ID
// exports.getPDFById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const pdf = await PDFModel.findById(id);  // Fetch PDF by ID
//     if (!pdf) {
//       return res.status(404).json({ message: 'PDF not found' });
//     }
//     res.status(200).json(pdf);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching PDF', error: err });
//   }
// };