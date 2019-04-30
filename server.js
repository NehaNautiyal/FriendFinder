// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==============================================================

app.get("/", function(req, res) {
    res.send(`Welcome to this page`);
  });

  app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
});