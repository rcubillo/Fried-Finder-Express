// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

// Dependencies
// =============================================================
var express = require('express');
// You need to use bodyParser() if you want the form data to be available in req.body.
var bodyParser = require('body-parser');
var path = require('path');

// Requireing the routes.
// =============================================================
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Server Routing Map
apiRoutes(app);
htmlRoutes(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});