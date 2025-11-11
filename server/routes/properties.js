const express = require("express");
const { PropertyController } = require("../controllers/PropertyController");
const { authenticateToken } = require("../middlewares/auth");
const { validate, propertySchema } = require("../middlewares/validation");

const router = express.Router();

router.get("/", authenticateToken, PropertyController.getAllProperties);
router.get(
  "/:propertyId",
  authenticateToken,
  PropertyController.getPropertyById
);

router.post(
  "/",
  authenticateToken,
  validate(propertySchema),
  PropertyController.createProperty
);

router.put(
  "/:propertyId",
  authenticateToken,
  validate(propertySchema.partial()),
  PropertyController.updateProperty
);

router.delete(
  "/:propertyId",
  authenticateToken,
  PropertyController.deleteProperty
);

module.exports = router;
