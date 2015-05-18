var REPL = require("repl");
var db = require("./models.js"); //why call this twice??

var repl = REPL.start("CatchPhrase > ");
repl.context.db = db;

repl.on("exit", function () {
  console.log("GOODBYE!!");
  process.exit();
})