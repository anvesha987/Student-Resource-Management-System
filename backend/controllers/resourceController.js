const fs = require("fs");
const path = require("path");
const Resource = require("../models/Resource");

const uploadResource = async (req, res) => {
  try {
    const { title, subject } = req.body;

    if (!req.file) return res.status(400).json({ message: "File is required" });

    const resource = await Resource.create({
      title,
      subject,
      file: req.file.filename,
      user: req.user.id, 
    });

    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getResources = async (req, res) => {
  try {
    const resources = await Resource.find({ user: req.user.id });
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource)
      return res.status(404).json({ message: "Resource not found" });

    if (resource.user.toString() !== req.user.id)
      return res
        .status(403)
        .json({ message: "Not authorized to delete this resource" });

    
    const filePath = path.join(__dirname, "..", "uploads", resource.file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await Resource.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Resource deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { uploadResource, getResources, deleteResource };
