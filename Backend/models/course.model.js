const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    img: String,
    university: String,
    start_from: String,
    total_enrolled: Number,
    course: String,
    price: Number,
    instructor: String,
    rating: Number,
    reviews: Number,
    reviews_txt: [
      {
        name: String,
        rate: Number,
        Body: String,
      },
    ],
    course_duration: String,
    skills: [String],
    modules: [String],
    Recommended: [
      {
        university: String,
        body: String,
      },
    ],
    Degrees: [
      {
        university: String,
        deg: String,
      },
    ],
    userID: String,
    userName: String,
  },
  { versionKey: false }
);

const courseModel = mongoose.model("Course", courseSchema);

module.exports = {
  courseModel,
};
