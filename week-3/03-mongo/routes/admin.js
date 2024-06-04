const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const router = Router();

const { Admin, Course } = require('../db');

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const value = await Admin.findOne({
    username,
    password,
  });

  if (value) {
    res.json({
      msg: 'Admin already exists!',
    });
  } else {
    await Admin.create({
      username,
      password,
    });
    res.json({
      msg: 'Admin created successfully!',
    });
  }
});

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;

  const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink,
  });

  res.json({
    msg: 'Course created successfully!',
    courseId: newCourse._id,
  });
});

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});

  res.json({
    purchasedCourses: courses,
  });
});

module.exports = router;
