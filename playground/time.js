var moment = require("moment");

// var date = new Date();
//
// var months = ["Jan", "Feb"];
// console.log();
var createdAt = 1234;
var date = moment(createdAt);
// date.subtract(12, "months");
console.log(date.format("Do MMM, YYYY"));

console.log(date.format("h:mm a"));
