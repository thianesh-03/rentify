const mongoose = require('mongoose');

const dbConfig = () => {
  const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/property-app';

  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
};

module.exports = dbConfig;