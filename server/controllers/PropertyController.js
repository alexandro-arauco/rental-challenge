const { PropertyService } = require("../models/Property");

class PropertyController {
  static async getAllProperties(req, res) {
    try {
      const properties = PropertyService.getAll();
      res.json({
        success: true,
        data: {
          properties,
          total: properties.length,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed fetching all properties",
      });
    }
  }

  static async getPropertyById(req, res) {
    try {
      const { propertyId } = req.params;
      const property = PropertyService.findById(propertyId);

      if (!property) {
        return res.status(404).json({
          success: false,
          error: "Property not found",
        });
      }

      res.json({
        success: true,
        data: {
          property: property.toJSON(),
        },
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: "Property not found",
      });
    }
  }

  static async createProperty(req, res) {
    try {
      const { title, description, address, price } = req.body;

      const newProperty = PropertyService.create({
        title,
        description,
        address,
        price,
      });

      res.status(201).json({
        success: true,
        data: {
          property: newProperty.toJSON(),
        },
      });
    } catch (error) {
      console.error("Error creating property:", error);
      res.status(500).json({
        success: false,
        error: "Failed to create property",
      });
    }
  }

  static async updateProperty(req, res) {
    try {
      const { propertyId } = req.params;
      const property = PropertyService.findById(propertyId);

      if (!property) {
        return res.status(404).json({
          success: false,
          error: "Property not found",
        });
      }

      const newData = req.body;

      const updatedProperty = PropertyService.updateProperty(property, newData);

      res.json({
        success: true,
        data: {
          property: updatedProperty,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error: "Failed to update property",
      });
    }
  }

  static async deleteProperty(req, res) {
    try {
      const { propertyId } = req.params;
      const property = PropertyService.findById(propertyId);

      if (!property) {
        return res.status(404).json({
          success: false,
          error: "Property not found",
        });
      }

      PropertyService.deleteProperty(propertyId);

      res.json({
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to delete property",
      });
    }
  }
}

module.exports = { PropertyController };
