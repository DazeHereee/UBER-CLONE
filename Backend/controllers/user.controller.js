const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ erros: errors.array()});
    }

    const { fullname, email, password } = req.body;
    const isUserAlreadyExist = await userModel.findOne({email});
    const hashedPassword = await userModel.hashPassword(password);
    if(isUserAlreadyExist){
        return res.status(409).json({ message: 'User already exists' });
    }
    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user});

}

module.exports.loginUser = async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ erros: errors.array()});
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');
    if(!user){
        return res.status(401).json({ message: 'Invalid email or password'});
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({ message: 'Invalid email or password'});
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ token, user}); 
}

module.exports.getUserProfile = async (req,res,next) =>{
    res.status(200).json(req.user);
}       

module.exports.logoutUser = async (req,res,next) =>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
    await blackListModel.create({ token });
    res.status(200).json({ message: 'Logged out successfully'});
}

