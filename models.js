var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/phrases_app");


var phraseSchema = new mongoose.Schema({
  // drop the id since mongoose will 
  // add a _id field for you when you create each item
  // title: {
  //   id: Number,
  //   default: 0
  // },
  // 
  word: {
    type: String,
    default: ""
  },
  definition: {
    type: String,
    default: ""
  }
});

var Phrase = mongoose.model("Phrase", phraseSchema);

module.exports.Phrase = Phrase;