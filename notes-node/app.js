console.log("starting app");

// passing module name as argument to require
// gives access to all functions on the fs module
const fs = require("fs");
const os = require("os");

var user = os.userInfo();
console.log(user);

// from documentation - first arg is file to append to, second arg is text to append to it, third arg is a callback with an error message

// If file doesn't exist, it adds it and appends text
// If it already exists, it just appends text
fs.appendFile("greetings.txt", `Hello, ${user.username}!`, function(err) {
  if (err) {
    console.log("Unable to write to file");
  }
});
