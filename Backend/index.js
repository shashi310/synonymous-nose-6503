const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/users.routes");
const { courseRouter } = require("./routes/course.routes");

const cors = require('cors')

require("dotenv").config();

const jwt = require("jsonwebtoken");

const app = express();

app.use(cors())

app.use(express.json());

app.use("/users", userRouter);
app.use("/courses", courseRouter);

//process.env.port
app.listen(8080, async () => {
  try {
    await connection;
    console.log(`connected to db \nrunning at port 8080`);
  } catch (error) {
    console.log(`error: ${error}`);
  }
});
