const express = require("express");
const router = express.Router();
const { Project } = require("../models/project");

const project = [];

// GET /home
router.get("/", (req, res) => {
  res.status(200).json({ message: "This is the project", data: project });
});

// GET /about
router.post("/", (req, res) => {
  const { title, description } = req.body;
  const newProject = new Project(Math.random().toString(), title, description);

  project.push(newProject);
  res
    .status(201)
    .json({ message: "Project added successfully", data: newProject });
});

// GET /contact
router.get("/contact", (req, res) => {
  res.status(200).json({ message: "Contact us at 123-456-7890" });
});

module.exports = router;
