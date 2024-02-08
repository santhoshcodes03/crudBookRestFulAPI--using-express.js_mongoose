const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  //we can use either methods but if we wanna give additional informations we should use 2nd type
  //1st type
  /*
    title:String,
    author:String,
    genre:String,
    year:String
    */

  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  year: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("bookStore", bookSchema);
