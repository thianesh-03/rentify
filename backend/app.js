const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const dbConfig = require('./utils/dbConfig');

// Middleware
app.use(express.json());

// Database configuration
dbConfig();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});