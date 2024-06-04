const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin, Course } = require('../db');
const router = Router();
const jwt = require('jsonwebtoken');

const secret = require('../config');

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  try {
    await Admin.create({ username, password });
    res.json({
      msg: 'Admin created successfully!',
    });
  } catch (error) {
    res.json({
      msg: 'Admin cannot be created!',
    });
  }
});

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const resp = await Admin.findOne({ username, password });

  if (resp) {
    res.json({
      token: `${jwt.sign({ username }, secret)}`,
    });
  } else {
    res.status(411).json({
      msg: 'Incorrect Username or Password!',
    });
  }
});

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;

  try {
    const newCourse = await Course.create({
      title,
      description,
      price,
      imageLink,
    });
    res.json({
      msg: 'Course created successfully',
      courseId: newCourse._id,
    });
  } catch (error) {
    res.json({
      msg: 'There was some error while creating the course!',
    });
  }
});

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

module.exports = router;
