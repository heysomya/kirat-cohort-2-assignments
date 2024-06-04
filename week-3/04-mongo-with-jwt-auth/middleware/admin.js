const jwt = require('jsonwebtoken');
const secret = require('../config');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const jwtToken = token.split(' ')[1];

  try {
    const decoded = jwt.verify(jwtToken, secret);
    req.username = decoded.username;
    next();
  } catch {
    res.status(403).json({
      msg: 'You are not authenticated!',
    });
  }
}

module.exports = adminMiddleware;
