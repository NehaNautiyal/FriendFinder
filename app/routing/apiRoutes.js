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

    var diffArrayOneFriend = [];
    var diffArray = [];
    var friendDiff = 0;

    app.get(`/api/friends/match`, function (req, res) {
        var currentFriend = friendData[friendData.length - 1];
        console.log(currentFriend);


        for (let i = 0; i < friendData.length - 1; i++) {
            for (let j = 0; j < 10; j++) {
                friendDiff = friendDiff + difference(friendData[i].scores[j], currentFriend.scores[j]);
                console.log(friendDiff); //each element should be the total difference for 1 friend
            }
            diffArray.push(friendDiff); //length # of friends -1
            console.log(diffArray);
            friendDiff = 0;
            
        }
        var matchElement = diffArray.reduce((a, b) => Math.min(a, b));
        var bestMatch = diffArray.indexOf(matchElement);

        res.json(friendData[bestMatch]);


    });
}