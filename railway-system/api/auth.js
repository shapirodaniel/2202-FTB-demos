const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const { Admin } = require('../db');

module.exports = async (req, _res, next) => {
  try {
    const authPrefix = 'Bearer';
    const auth = req.header('Authorization');

    if (!auth || !auth.startsWith(authPrefix)) {
      throw new Error('User is not authorized to perform this action.');
    }

    // the token is at index 1 after the split operation
    // `Bearer $token`.split(' ') -> ['Bearer', '$token']
    const token = auth.split(' ')[1];
    const user = jwt.verify(token, JWT_SECRET);

    const isAdmin = await Admin.checkAdmin({ adminId: user.id });

    req.user = user;
    req.user.isAdmin = isAdmin;

    next();
  } catch (err) {
    next(err);
  }
};
