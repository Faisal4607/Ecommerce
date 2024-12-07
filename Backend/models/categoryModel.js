const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String, // URL of the category image (e.g., for banners or thumbnails)
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Self-referencing for subcategories
    default: null, // Null for top-level categories
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
