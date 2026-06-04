const ProductCar = require("../models/productCarModel");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const getAllProductCars = async (req, res) => {
  try {
    const productCars = await ProductCar.find();
    res.json(productCars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductCarById = async (req, res) => {
  try {
    const productCar = await ProductCar.findById(req.params.id);
    if (!productCar) {
      return res.status(404).json({ message: "ProductCar not found" });
    }
    res.json(productCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProductCar = async (req, res) => {
  try {
    const productCar = new ProductCar({
      userId: req.user._id, // Assuming req.user is set by authentication middleware
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
    });
    const savedProductCar = await productCar.save();
    res.status(201).json(savedProductCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProductCar = async (req, res) => {
  try {
    const productCar = await ProductCar.findByIdAndUpdate(
      req.params.id,
      {
        userId: req.user._id,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.file
          ? `/uploads/${req.file.filename}`
          : req.body.imageUrl, // Use existing imageUrl if no new file is uploaded
      },
      { new: true },
    );
    if (!productCar) {
      return res.status(404).json({ message: "ProductCar not found" });
    }
    res.json(productCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProductCar = async (req, res) => {
  try {
    const productCar = await ProductCar.findByIdAndDelete(req.params.id);
    if (!productCar) {
      return res.status(404).json({ message: "ProductCar not found" });
    }
    res.json({ message: "ProductCar deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProductCars,
  getProductCarById,
  createProductCar,
  updateProductCar,
  deleteProductCar,
  upload,
};
