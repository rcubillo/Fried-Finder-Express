// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.


// Dependencies
// =============================================================
var path = require('path');


// Routes
// =============================================================
// Function that contains two routes
function htmlRoutes(app) {
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  // A default USE route that leads to home.html which displays the home page.
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

}


//Exporting the function.
module.exports = htmlRoutes;