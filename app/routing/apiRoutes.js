// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also
//  be used to handle the compatibility logic.


// Requiring friends.js
var friendsData = require('../data/friends.js');


// Function including two routes
function apiRoutes(app) {

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function (req, res) {

    // Parse new friend input to get integers (AJAX post seemed to make the numbers strings)
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    for(var i=0; i < req.body.scores.length; i++){
      scoresArray.push( parseInt(req.body.scores[i]) )
    }
    newFriend.scores = scoresArray;


    // Cross check the new friend entry with the existing ones
    var scoreComparisionArray = [];
    for(var i=0; i < friendsData.length; i++){

      // Check each friend's scores and sum difference in points
      var currentComparison = 0;
      for(var j=0; j < newFriend.scores.length; j++){
        currentComparison += Math.abs( newFriend.scores[j] - friendsData[i].scores[j] );
      }

      // Push each comparison between friends to array
      scoreComparisionArray.push(currentComparison);
    }

    // Determine the best match using the postion of best match in the friendsData array
    var bestMatchPosition = 0; // assume its the first person to start
    for(var i=1; i < scoreComparisionArray.length; i++){

      // Lower number in comparison difference means better match
      if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
        bestMatchPosition = i;
      }
    }

    //Choose the last entry if there was something similar.
    var bestFriendMatch = friendsData[bestMatchPosition];



    // Using json to get the best frien match.
    res.json(bestFriendMatch);


    // pushing new frined to the "newFriend" array.
    friendsData.push(newFriend);

  });

}

//Exporting the function.
module.exports = apiRoutes;