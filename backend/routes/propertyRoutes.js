const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/', propertyController.getAllProperties);
router.get('/seller', propertyController.getSellerProperties);
router.get('/:id', propertyController.getPropertyById);
router.post('/', propertyController.addProperty);
router.put('/:id', propertyController.updateProperty);
router.delete('/:id', propertyController.deleteProperty);

module.exports = router;