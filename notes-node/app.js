console.log("starting app");

// File system - built-in node module
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
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("duplicate title, try again");
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note not found";
  console.log(message);
} else {
  console.log("Command not recognized");
}
