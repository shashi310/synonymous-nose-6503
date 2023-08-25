const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/users.models");
const jwt = require("jsonwebtoken");
const { blacklist } = require("../Middleware/BlacklistAuth.middleware");
const multer = require("multer");
const { auth } = require("../Middleware/Authorization.middleware");
const {BlacklistModel}=require("../models/blacklist.model")

const userRouter = express.Router();

//give all user list
// Access: admin
// EndPoint: /users/;
// FRONTEND: when user/admin/teacher want to register in site;

userRouter.get("/", auth, async (req, res) => {
  try {
    if (req.body.role == "admin") {
      let users = await await UserModel.find();
      res.status(200).json({ users });
    } else {
      res.status(401).json({ error: "you don't have access to users" });
    }
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "something went wrong", error: err.message });
  }
});

//registration
// Access: all
// EndPoint: /user/register;
// FRONTEND: when user/admin/teacher want to register in site;
userRouter.post("/register", async (req, res) => {
  const { name, email, password, age, city, job, image } = req.body;
  const registeredUser = await UserModel.findOne({ email });

  if (registeredUser) {
    res.status(409).json({ msg: "User already exist. Please Login!!" });
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        // Store hash in your password DB.
        if (err) {
          res.status(404).json({ msg: err });
        } else {
          const user = new UserModel({
            name,
            email,
            password: hash,
            age,
            city,
            job,
            image,
          });
          await user.save();
          res.status(201).json({ msg: "user created succesfully", user });
        }
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
});

// login for users;
// Access: All;
// EndPoint: /users/login;
// FRONTEND: when Admin/user/teacher want to login

userRouter.post("/login", async (req, res) => {
  
  const { email, password } = req.body;
  try {
    const findUser = await UserModel.findOne({ email });

    if (findUser) {
      bcrypt.compare(password, findUser.password, async (err, result) => {
        if (result) {
          jwt.sign(
            { userID: findUser._id, userName: findUser.name,role: findUser.role},
            process.env.secrete,
            { expiresIn: "7d" },
            (err, token) => {
              if (token) {
                res.json({ msg: "User loggedIn.", token });
              } else {
                res.json({ err: err.message });
                return;
              }
            }
          );
        } else {
          res.json({ msg: "Invalid Credentials." });
          return;
        }
      });
    } else {
      res.json({ msg: "User doesnt exist, please register." });
      return;
    }
  } catch (error) {
    res.status(400).json({ error });
  }


});

//updation
// Access: All
// EndPoint: /users/update/:userId;
// FRONTEND: when user want to update his information;
userRouter.patch("/update/:userId", async (req, res) => {
  const { userId } = req.params;
  const payload = req.body;

  try {
    let insertpayload;
    bcrypt.hash(payload.password, 5, async (err, hash) => {
      // Store hash in your password DB.
      if (err) {
        res.status(404).json({ msg: err });
      } else {
        console.log(hash);
        insertpayload = await { ...payload, password: hash };
      }
      await UserModel.findByIdAndUpdate({ _id: userId }, insertpayload);
      const user = await UserModel.find({ _id: userId });
      res.status(200).json({ msg: "user updated successfully", user });
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

//delete the user ;
// Access: Admin
// EndPoint: /users/delete/:userId;
// FRONTEND: when admin want to delete user/teacher
userRouter.delete("/delete/:userId", auth, async (req, res) => {
  try {
    if (req.body.role == "admin") {
      const { userId } = req.params;
      const deletedUser = await UserModel.find({ _id: userId });
      await UserModel.findByIdAndDelete({ _id: userId });
      res
        .status(200)
        .json({ msg: "user has been deleted", deletedUser: deletedUser });
    } else {
      res.status(401).json({ error: "you don't have access to delete users" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

//logout
// Access: All
// EndPoint: /users/logout
// FRONTEND: when users want to logout
userRouter.post("/logout",auth, async(req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  const { userID, userName,role } = req.body;

  try {
    const blacklist = await BlacklistModel.findOne({ userID });

    if (blacklist) {
      const updateBlackList = await BlacklistModel.findOneAndUpdate(
        { userID },
        { tokens: [...blacklist.tokens, token] }
      );
      if (updateBlackList) {
        res.json({ msg: "User Loggedout.", blacklist: updateBlackList });
      } else {
        res.json({ msg: "Something went wrong please try again!!" });
      }
    } else {
      const newBlacklist = new BlacklistModel({
        userID,
        userName,
        role,
        tokens: [token],
      });
      await newBlacklist.save();
      res.json({ msg: "User Loggedout.", blacklist: newBlacklist });
    }

    // console.log(blacklist);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// list to courses user purchased
// Access: All
// EndPoint: /users/userCourse/:userId
// FRONTEND: When user want to see his purchased courses

userRouter.get("/userCourse/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await UserModel.findById({ _id: userId }).populate("course");
    // console.log(user.course, userId);
    res.status(200).json({ course: user.course });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Something Went Wrong", error: err.message });
  }
});

// add courseId to the user course array;
// Access: All
// EndPoint: /users/addCourse/:courseId
// FRONTEND: When user have purchased the couse and we have add it to the user course list;

userRouter.post("/addCourse/:courseId", auth, async (req, res) => {
  try {
    // let id = req.body.userId;
    const { userID, userName,role } = req.body;
    // console.log(userID);
    // const courseId = req.params.courseId;
  
    const {courseId} = req.params

    // check is that course is already present or not;
    await UserModel.findOne({ _id: userID, course: { $in: [courseId] } })
      .then(async (course) => {
        //console.log(course);
        if (course) {
          res
            .status(400)
            .json({ error: "Course is already present for the user" });
        } else {
          let user = await UserModel.findByIdAndUpdate(userID, {
            $push: { course: courseId },
          });
          res.status(201).json({ message: "course added", user });
        }
      })
      .catch((error) => {
        console.error("Error checking course:", error);
      });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Something Went Wrong", error: err.message });
  }
});

module.exports = {
  userRouter,
};
