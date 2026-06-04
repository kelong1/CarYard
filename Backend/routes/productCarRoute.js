const express = require("express");
const ProductCar = require("../models/productCarModel");
const {
  getAllProductCars,
  getProductCarById,
  createProductCar,
  updateProductCar,
  deleteProductCar,
  upload,
} = require("../controllers/productCarController");
const authMiddleware = require("../middlewares/authMiddleware");

const app = express();

const router = express.Router();

router.get("/", getAllProductCars);
router.get("/:id", getProductCarById);

router.use(authMiddleware);

router.post("/createProductCar", upload.single("imageUrl"), createProductCar);
router.put("/:id", upload.single("imageUrl"), updateProductCar);
router.delete("/:id", deleteProductCar);

module.exports = router;
