//SERVER

//require all of our libraries
//do all of our routing (app.get, app.listen)

// REQUIREMENTS //
var express = require("express"),
    path = require("path"),
    _ = require("underscore"),
    bodyParser = require("body-parser"),
    db = require("./models.js");
var app = express();

// CONFIG //

// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'));

// body parser config
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("bower_components")); don't think I need?

// DATA //

// pre-seeded phrase data
var phrases =[
  {id: 0, word: "word0", definition: "definition0"},
  {id: 1, word: "word1", definition: "definition1"},
  {id: 2, word: "word2", definition: "definition2"},
  {id: 3, word: "word3", definition: "definition3"},
  {id: 4, word: "word4", definition: "definition4"}
];

// ROUTES //

// root path
app.get("/", function (req, res){
  // render home.html
  res.sendFile(path.join(__dirname + '/public/html/home.html'));
});


app.get("/phrases", function (req, res){
  // render phrases index as JSON
  res.send(JSON.stringify(phrases));
});

// app.get("/phrases", function (req, res){
//   db.Catchphrase.find({},
//     function (err, phrases) {
//       res.send(200, phrases);
//       console.log("made it to line 52 index.js");
//     });
// });


app.post("/phrases", function (req, res){
  var newPhrase = req.body;
  newPhrase.id = phrases[phrases.length-1].id + 1;
  phrases.push(newPhrase);
  res.send(JSON.stringify(newPhrase));
});

// app.post("/phrases", function (req, res) {
//   db.Catchphrase.create(req.body.phrases,
//     function (err, phrases) {
//       res.send(201, phrases);
//     });
// });

app.delete("/phrases/:id", function (req, res) {
  var targetId = req.params.id; //last item is 4
  var targetItem = _.findWhere(phrases, {id: targetId}); //returns phrase[clicked item]
  var index = phrases.indexOf(targetItem); // is returning -1
  phrases.splice(index,1);
  res.send(JSON.stringify(targetItem));
});

// app.delete("/phrases/:_id", function (req, res) {
//   db.Catchphrase.findAndRemoveOne({
//     _id: req.params._id
//   }, function (err, phrases) {
//     res.send(204); // NO CONTENT but OK!
//   });
// });

// listen on port 3000
app.listen(3000, function (){
  console.log("listening on port 3000");
});
