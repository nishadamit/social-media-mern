const mongoose = require("mongoose");

exports.connection = function () {
  mongoose
    .connect(process.env.MONGO_URL2)
    .then(() => {
      console.log("database connected successfully");
    })
    .catch(() => {
      console.log("database connection failed");
      console.log(console.error());
    });
};
