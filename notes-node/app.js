console.log("starting app");

// Third party modules
const fs = require("fs");
const _ = require("lodash");

// local files
const notes = require("./notes.js");

var command = process.argv[2];
console.log("Command:", command);
console.log(process.argv);

if (command === "add") {
  console.log("Addding new note");
} else if (command === "list") {
  console.log("Listing all notes");
} else if (command === "remove") {
  console.log("Removing Note");
} else if (command === "read") {
  console.log("Fetching Note");
} else {
  console.log("Command not recognized");
}
