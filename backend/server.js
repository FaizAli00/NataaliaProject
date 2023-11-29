const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

mongoose.connect('mongodb+srv://faizuali9991:Faizu1234@cluster0.5jdhdqi.mongodb.net/');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Your routes will be added here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const productRoutes = require('./routes/productRoutes');

// ...

app.use('/api', productRoutes);