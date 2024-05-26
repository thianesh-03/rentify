const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  place: { type: String, required: true },
  area: { type: String, required: true },
  numBedrooms: { type: Number, required: true },
  numBathrooms: { type: Number, required: true },
  hospitalsNearby: { type: [String] },
  collegesNearby: { type: [String] },
  sellerDetails: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  postedDate: { type: Date, default: Date.now },
  lastUpdatedDate: { type: Date, default: Date.now }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;