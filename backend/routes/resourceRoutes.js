const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const multer = require("multer");
const {
  uploadResource,
  getResources,
  deleteResource,
} = require("../controllers/resourceController");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", auth, upload.single("file"), uploadResource);
router.get("/", auth, getResources);
router.delete("/:id", auth, deleteResource);

module.exports = router;
