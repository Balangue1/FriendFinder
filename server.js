// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

 // Sets up the Express app to handle data parsing
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

 require('./app/routing/apiRoutes.js')(app);
 require('./app/routing/htmlRoutes.js')(app);

 // Table Reservations (DATA)
 // =============================================================
//  var reservations = [
//    {
//      routeName: "reserve",
//      name: "Jen",
//      phone: "867-5309",
//      customerEmail: "customer1@test.com",
//      customerID: "Jen"
//    },
// ];

// var tables = [
//     {
//       routeName: "tables",
//       name: "Jason",
//       phone: "999-5309",
//       customerEmail: "jason@test.com",
//       customerID: "Jason"
//     },
//  ];
 


// var waitList = [
//     {
//       routeName: "waitlist",
//       name: "Yoda",
//       phone: "867-5309",
//       customerEmail: "customer1@test.com",
//       customerID: "Yoda"
//     },
//  ];
 
 

//   {
//     routeName: "darthmaul",
//     name: "Darth Maul",
//     role: "Sith Lord",
//     age: 200,
//     forcePoints: 1200
//   },
//   {
//     routeName: "obiwankenobi",
//     name: "Obi Wan Kenobi",
//     role: "Jedi Master",
//     age: 55,
//     forcePoints: 1350
//   }
// ];

// // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
 app.get("/", function(req, res) {
   // res.send("Welcome to the Star Wars Page!")
   res.sendFile(path.join(__dirname, "../FriendFinder/public/home.html"));
 //  res.sendFile(path.join(__dirname, "view.html"));

 });

 app.get("/survey", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../FriendFinder/public/survey.html"));
  //  res.sendFile(path.join(__dirname, "view.html"));
 
  });
 
  // app.get("/reserve", function(req, res) {
  //   // res.send("Welcome to the Star Wars Page!")
  //   res.sendFile(path.join(__dirname, "../aug4_express/reserve.html"));
  // //  res.sendFile(path.join(__dirname, "view.html"));
 
  // });
 
 
  // Links at the bottom
 // Displays all reservations
//  app.get("/api/reservations", function(req, res) {
//    return res.json(reservations);
//  });

  // Displays all tables
  // app.get("/api/tables", function(req, res) {
  
  //   return res.json(reservations);
  // });
 
  // app.get("/api/waitList", function(req, res) {
  
  //   return res.json(waitList);
  // });
 

  //links at the bottom
  // app.post("/api/tables", function(req, res) {
  //   console.log("tables routes post hit");

  //   var newReservation = req.body;
  //   var reserved = false;

  //   //only 3 reservations can be taken
  //   if (reservations.length<=2) {
  //       reservations.push(newReservation);
  //       reserved=true;
  //   }else{

    
  //       reserved = false;
  //       waitList.push(newReservation);
       
  //   }

  //   res.json(reserved);
  // });
 
  //links at the bottom
  // app.post("/api/waitlist", function(req, res) {
  //   console.log("waitlist routes post hit");

    // var newReservation = req.body;
    // reservations.push(newReservation);

  //   res.json(waitList);
  // });
 
  //links at the bottom
  // app.post("/api/clear", function(req, res) {
  //   console.log("in post using clear route");

  //   reservations.length = 0;
  //   waitList.length = 0;

  //   return;

  // });
 



// // Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newcharacter = req.body;

//   console.log(newcharacter);

//   // We then add the json the user sent to the character array
//   characters.push(newcharacter);

//   // We then display the JSON to the users
//   res.json(newcharacter);
// });

 // Starts the server to begin listening
 // =============================================================
 app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });
