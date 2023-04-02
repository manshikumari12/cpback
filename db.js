const mongoose = require("mongoose");

const connection = mongoose.connect(
    "mongodb+srv://manshisbp:manshi@cluster0.5dbwi5b.mongodb.net/proj?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};