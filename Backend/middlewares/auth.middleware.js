const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const isBlacklisted = await blackListModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Token Unauthorized' });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded._id);
        
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}