const express = require("express");
const { courseModel } = require("../models/course.model");
const { auth } = require("../Middleware/Authorization.middleware");
const { BlacklistAuth } = require("../Middleware/BlacklistAuth.middleware");

const courseRouter = express.Router();

courseRouter.use(auth);
courseRouter.use(BlacklistAuth)

courseRouter.post("/add", async (req, res) => {
  try {

    if (req.body.role == "admin") {
      const { userID } = req.body;
      if (userID) {
        const post = new courseModel(req.body);
        await post.save();
        res.status(200).send({ msg: "Course Sucessfully Added" });
      } else {
        res.status(400).send({ error: "Please Login......!" });
      }
    }else{
      res.status(400).send({ error:"you are not authorized!!" });
    }
   
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

courseRouter.get("/", async (req, res) => {
  const { userID } = req.body;
  const query = {};
  if (userID) {
    query.userID = userID;
  }

  try {
    const post = await courseModel.find(query);
    res.status(200).send({ msg: "All Courses", Courses: post });
  } catch (err) {
    res.status(400).send(err);
  }
});

courseRouter.patch("/update/:courseId", async (req, res) => {
  try {
    if (req.body.role == "admin") {
      const { courseId } = req.params;
    const { userID } = req.body;
    const post = await courseModel.findByIdAndUpdate(
      { userID, _id: courseId },
      req.body
    );
    if (!post) {
      res.status(400).send({ error: "Course Not Found" });
    } else {
      res.status(200).send({ msg: "Course updated Successfull" });
    }
    }else{
      res.status(400).send({ error:"you are not authorized!!" });
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

courseRouter.delete("/delete/:courseId", async (req, res) => {
  try {
    if (req.body.role == "admin") {
      const { courseId } = req.params;
    const { userID } = req.body;
    const post = await courseModel.findByIdAndDelete({ userID, _id: courseId });
    if (!post) {
      res.status(400).send({ error: "Course Not Found" });
    } else {
      res.status(200).send({ msg: "Course Deleted Successfull" });
    }
    }else{
      res.status(400).send({ error:"you are not authorized!!" });
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = {
  courseRouter,
};
