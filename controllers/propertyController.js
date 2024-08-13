const Property = require('../models/Property');

// create new property
async function createProperty(req, res) {
  try {
    const userId = req.user.userId;
    const { ...propertyData } = req.body;
    // const { userId, ...propertyData } = req.body;
    const newProperty = await Property.create({ ...propertyData, userId });
    res.status(201).json(newProperty);
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(501).json({ error: 'Failed to create property' });
  }
}

// get all properties with the user
async function getAllProperties(req, res) {
  const userId = req.user.userId;
  // const { userId } = req.query;
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }
  try {
    const properties = await Property.findAll({ where: { userId } });
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
}

// get the property by id 
async function getPropertyById(req, res) {
  // const userId = req.user.userId;
  const { id } = req.query;
  try {

    const property = await Property.findByPk(id);

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


// update the property
async function updateProperty(req, res) {
  const { id, ...propertyData } = req.body;

  try {
    const property = await Property.findByPk(id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    await property.update(propertyData);
    res.json(property);
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(500).json({ error: 'Failed to update property' });
  }
}


// delete the peoperty
async function deleteProperty(req, res) {
  const { id } = req.query;

  try {
    const property = await Property.findByPk(id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    await property.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting property:', error);
    res.status(500).json({ error: 'Failed to delete property' });
  }
}

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty
};
