const mongoose = require("mongoose");
require("dotenv").config();

// const connection = mongoose.connect(process.env.mongoURL);

const connection=mongoose.connect("mongodb+srv://shashi313:shashi@cluster0.nfgb48s.mongodb.net/auth?retryWrites=true&w=majority")

module.exports = {
  connection,
};
