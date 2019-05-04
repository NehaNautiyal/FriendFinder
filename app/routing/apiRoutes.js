// Load Data 
var friendData = require('../data/friends');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
        console.log(friendData);
    });

    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        console.log(req.body);
        res.json(true);
    });

    app.get(`/api/friends/match`, function (req, res) {
        var match = [];
        var friendDiff = 0;

        
    });
}