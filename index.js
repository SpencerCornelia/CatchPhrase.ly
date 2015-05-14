/*SERVER*/

//require all of our libraries
//do all of our routing (app.get, app.listen)

// requirements
var express = require('express'),
    app = express();

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
    res.send("Home page");
});

// start the server
app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});
