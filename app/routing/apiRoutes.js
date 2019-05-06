// Load Data 
var friendData = require('../data/friends');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        res.json(true);
    });

    function difference(a, b) {
        return Math.abs(a - b);
      }

    app.get(`/api/friends/match`, function (req, res) {
        var diffArray = [];
        var friendDiff = 0;
        var currentFriend = friendData[friendData.length - 1];
        // console.log(friendData);


        for (let i = 0; i < friendData.length; i++) {
            friendDiff = difference(friendData[i].scores, currentFriend.scores);
            diffArray.push(friendDiff); //length 10
            console.log(diffArray);
        }


    });
}