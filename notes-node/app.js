console.log("starting app");

<<<<<<< HEAD
// require built-in node modules
=======
>>>>>>> 264b9283492ea23b939dd6c8dc7baf646a17c5c9
// passing module name as argument to require
// gives access to all functions on the fs module
const fs = require("fs");
const os = require("os");

<<<<<<< HEAD
// require local files
// notes stores exports from notes.js to be used in this file
const notes = require("./notes.js");

var res = notes.add(123, 5);
console.log(res);

// var user = os.userInfo();
// console.log(user);
=======
var user = os.userInfo();
console.log(user);
>>>>>>> 264b9283492ea23b939dd6c8dc7baf646a17c5c9

// from documentation - first arg is file to append to, second arg is text to append to it, third arg is a callback with an error message

// If file doesn't exist, it adds it and appends text
// If it already exists, it just appends text
<<<<<<< HEAD
// fs.appendFile(
//   "greetings.txt",
//   `Hello, ${user.username}! You are ${notes.age}`,
//   function(err) {
//     if (err) {
//       console.log("Unable to write to file");
//     }
//   }
// );
=======
fs.appendFile("greetings.txt", `Hello, ${user.username}!`, function(err) {
  if (err) {
    console.log("Unable to write to file");
  }
});
>>>>>>> 264b9283492ea23b939dd6c8dc7baf646a17c5c9
