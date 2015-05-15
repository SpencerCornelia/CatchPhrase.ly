//SERVER

//require all of our libraries
//do all of our routing (app.get, app.listen)

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    _ = require("underscore"),
    bodyParser = require("body-parser");

// CONFIG //

// serve js & css files into a public folder
app.use(express.static(__dirname + '/public'));

// body parser config
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post("/phrases", function (req, res){
  var newPhrase = req.body;
  newPhrase.id = phrases[phrases.length-1].id + 1;
  phrases.push(newPhrase);
  res.send(JSON.stringify(newPhrase));
});

app.delete("/phrases/:id", function (req, res) {
  var targetId = parseInt(req.params.id); //last item is 4
  var targetItem = _.findWhere(phrases, {id: targetId}); //returns phrase[clicked item]
  var index = phrases.indexOf(targetItem); // is returning -1
  phrases.slice(index,1);
  console.log(phrases);
  res.send(JSON.stringify(targetItem));
})

// listen on port 3000
app.listen(3000, function (){
  console.log("listening on port 3000");
});
