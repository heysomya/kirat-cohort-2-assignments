const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');
const jwt = require('jsonwebtoken');
const { User, Course } = require('../db');
const JWT_SECRET = require('../config');

// User Routes
router.post('/signup', async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  const response = await User.create({ username, password });
  res.json({
    msg: 'User created successfully!',
  });
});

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  const doesUserExist = await User.find({ username, password });

  if (doesUserExist) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: 'User does not exist!',
    });
  }
});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});
  res.json({
    courses: allCourses,
  });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.username;

  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.status(200).json({
    msg: 'Course purchased successfully!',
  });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username: req.username });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    purchasedCourses: courses,
  });
});

module.exports = router;
