module.exports = function (app) {
  app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../FriendFinder/app/public/home.html"));
  //  res.sendFile(path.join(__dirname, "view.html"));
 
  });
 
  app.get("/survey", function(req, res) {
     // res.send("Welcome to the Star Wars Page!")
     res.sendFile(path.join(__dirname, "../FriendFinder/app/public/survey.html"));
   //  res.sendFile(path.join(__dirname, "view.html"));
  
   });
}

