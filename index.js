/*SERVER*/

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
  {id: 0, word: "spencer", definition: "cornelia"},
  {id: 1, word: "spencer1", definition: "cornelia2"},
  {id: 2, word: "spencer2", definition: "cornelia3"},
  {id: 3, word: "spencer3", definition: "cornelia4"},
  {id: 4, word: "spencer4", definition: "cornelia5"}
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
  console.log("made it to app.post")
  var newPhrase = req.body.newPhrase;
  phrases.push(newPhrase);
  console.log(newPhrase);
  res.send(newPhrase);
});

// listen on port 3000
app.listen(3000, function (){
  console.log("listening on port 3000");
});
