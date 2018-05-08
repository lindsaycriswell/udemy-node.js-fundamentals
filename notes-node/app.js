console.log("starting app");

// File system
const fs = require("fs");

// Third party modules
const _ = require("lodash");
const yargs = require("yargs");

// local files
const notes = require("./notes.js");

// yargs' parsed version of the argument vector
const argv = yargs.argv;
var command = argv._[0];
console.log("Command:", command);
console.log("yargs", argv);

// use values from yargs to call methods in other files e.g. notes.js
if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("Command not recognized");
}
