const path = require("path");
const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var express = require("express");
var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log("Server is up on port 3000");
});
