const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();


const verfiyToken = (req, res, next) => {
    const tokenFromHeader = req.header('token') || req.header('Authorization');
    const token = tokenFromHeader.split(' ')[1];

    const verfiy = jwt.verify(token, process.env.SECRET);

    req.token = verfiy;

    next();
}


module.exports = { verfiyToken };