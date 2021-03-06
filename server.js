// Dependencies
// =============================================================
var express = require("express");

// app.use(express.static('public'));

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ==============================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

  app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
});