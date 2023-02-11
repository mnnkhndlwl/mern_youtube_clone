import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";
import { NONAME } from "dns";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({name: req.body.name});
    if(!user) return next(createError(404, "User not found!"));
    // try {
      
    //   await res.cookie("access_token", token,{
    //     httpOnly:true,
    //     samesite:"strict",
    //     secure: true,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
      
    
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));
 
    const { password, ...others } = user._doc; // as we don't want to dend our password in response
    const token = jwt.sign({ id: user._id }, process.env.JWT);

    res.status(200).json({token,...others});

  } catch (error) {
    next(error);
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log(user._id.toString('hex'));
      const token = jwt.sign({ id: user._id.toString('hex') }, process.env.JWT);
      res
        .status(200)
        .json({token,...user._doc});
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
        res.status(200).json({token,...savedUser._doc});
    }
  } catch (err) {
    next(err);
  }
};