// //Install express server
// const express = require("express");
// const path = require("path");

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + "/dist/<name-of-app>"));

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname + "/dist/<name-of-app>/index.html"));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);
var express = require("express");
var path = require("path");
var app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(__dirname)); // set static files location, in this case the route, add a file name if not
app.listen(process.env.PORT || 3000);
