const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const User = require('../models/user');

const user_create_signup = (req, res, next) => {
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: 'User already exists'
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(200).json({
                        error: err
                    })
                } else { 
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash,
                        userName: req.body.userName,
                        fullName: req.body.fullName,
                        phoneNumber: req.body.phoneNumber
                    })
                user
                    .save()
                    .then(result => {
                        // console.log(result)
                        const token = jwt.sign({
                            email: user.email,
                            phoneNumber: user.phoneNumber,
                            userName: user.userName,
                            fullName: user.fullName,
                            userId: user._id
                        },
                            "secret",
                        {
                            expiresIn: "24h"
                        }
                        )
                        res.status(201).json({
                            message: 'User Created',
                            token: token,
                            result
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({
                            error: err
                        })
                    })
                }
                
            })
        }
    })
    
}


const user_create_login = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(200).json({
                    message: 'Auth Failed'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Password does not match'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                        userName: user[0].userName,
                        userId: user[0]._id
                    },
                        "secret",
                    {
                        expiresIn: "24h"
                    }
                    )
                    return res.status(200).json({
                        message: 'Auth Successful', 
                        token: token,
                        result
                    });
                }
                res.json({
                    message: 'Password does not match'
                });
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
        
}


const user_delete = (req, res, next) => {
    User.remove({ _id: req.params.userId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: " user deleted "
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
}


module.exports = {
    user_create_signup,
    user_create_login,
    user_delete
}