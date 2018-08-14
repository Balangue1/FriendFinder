//=========================================================================
// LOAD DATA
// We are linking our routes to a the friends data source
// This data source holds arrays of information on friend-data
//==========================================================================

var friendData = require("../data/friends.js");

//==========================================================================
// Export API Route
//=========================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    //-----------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ... the JSON is pushed to the appropriate JavaScript array
    //------------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to a user's survey result
        // Then compare those results against every user in the database.
        // It will then calculate the difference between each of the numbers and the user's numbers.
        // It will then choose the user with the least differences as the "best friend match."
        // In the case of multiple users with the same result it will choose the first match.
        // After the test, it will push the user to the database.

        // This object will hold the "best match" as it loops through all the options
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // Take user input from survey POST and parse data
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        // Below will calculate the difference between the user's scores and each user in the database

        var totalDifference = 0;
        // Loop through all friends in the database
        for (var i = 0; i < friendData.length; i++) {
    //        console.log(friendData[i].name);
            totalDifference = 0;

            // Loop through all the scores of each friend
            for (var j = 0; j < friendData[i].scores[j]; j++) {
                // Calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));

                // If the sum of the difference is less then the difference of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {
                    // Reset the bestMatch to be the new friend
                    bestMatch.name = friendData[i].name;
                    bestMatch.photo = friendData[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        // Save the data to the database
        friendData.push(userData);

        // Return a JSON with the user's bestMatch
        res.json(bestMatch);
    });
}
