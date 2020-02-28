require("dotenv").config({ path: "./variables.env" });
var app = require("./app");

//traditional
// var port = process.env.PORT || 3000;

// var server = app.listen(port, function() {
//   console.log('Express server listening on port ' + port);
// });

//server less
var serverless = require("serverless-http");
module.exports.handler = serverless(app);
