const Property = require('../models/property.model');

exports.getAllProperties = async (req, res) => {
  try {
    const filters = req.query;
    const properties = await Property.find(filters).populate('sellerDetails', 'firstName lastName email phoneNumber');
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getSellerProperties = async (req, res) => {
  try {
    const sellerId = req.userId; // Assuming you have middleware to extract user ID from the request
    const properties = await Property.find({ sellerDetails: sellerId });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const property = await Property.findById(propertyId).populate('sellerDetails', 'firstName lastName email phoneNumber');
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addProperty = async (req, res) => {
  try {
    const sellerId = req.userId; // Assuming you have middleware to extract user ID from the request
    const { place, area, numBedrooms, numBathrooms, hospitalsNearby, collegesNearby } = req.body;
    const newProperty = new Property({
      place,
      area,
      numBedrooms,
      numBathrooms,
      hospitalsNearby,
      collegesNearby,
      sellerDetails: sellerId
    });
    await newProperty.save();
    res.status(201).json({ message: 'Property added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const { place, area, numBedrooms, numBathrooms, hospitalsNearby, collegesNearby } = req.body;
    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      { place, area, numBedrooms, numBathrooms, hospitalsNearby, collegesNearby, lastUpdatedDate: Date.now() },
      { new: true }
    );
    if (!updatedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json({ message: 'Property updated successfully', property: updatedProperty });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const propertyId = req.params.id;
    const deletedProperty = await Property.findByIdAndDelete(propertyId);
    if (!deletedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};