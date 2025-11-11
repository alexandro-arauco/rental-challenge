const properties = [];

class Property {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.address = data.address;
    this.price = data.price;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      address: this.address,
      price: this.price,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

class PropertyService {
  static create(propertyData) {
    const newProperty = new Property({
      id: properties.length + 1,
      ...propertyData,
    });

    properties.push(newProperty);

    return newProperty;
  }

  static getAll() {
    return properties.map((property) => property.toJSON());
  }

  static findById(id) {
    return properties.find((property) => property.id === parseInt(id));
  }

  static updateProperty(property, newData) {
    try {
      // Update the property in the array
      Object.assign(property, newData);
      property.updatedAt = new Date();

      return property.toJSON();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static deleteProperty(propertyId) {
    const index = properties.findIndex(
      (property) => property.id === parseInt(propertyId)
    );

    if (index !== -1) {
      properties.splice(index, 1);
    }
  }
}

module.exports = {
  Property,
  PropertyService,
  properties,
};
