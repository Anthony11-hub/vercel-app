const express = require("express");
const router = express.Router();

// GET /home
router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the home page" });
});

// GET /about
router.get("/about", (req, res) => {
  res.status(200).json({ message: "This is the about page" });
});

// GET /contact
router.get("/contact", (req, res) => {
  res.status(200).json({ message: "Contact us at 123-456-7890" });
});

module.exports = router;
