// Store in file as string
// var obj = {
//   name: "LC"
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

// Fetch from file and convert back to object
// var personString = '{"name": "LC", "age": 33}';
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require("fs");

var originalNote = {
  title: "Some title",
  body: "Some body"
};

var originalNoteString = JSON.stringify(originalNote);

// Writes to the specified file
// arguments(filename with json extension, note string)
fs.writeFileSync("notes.json", originalNoteString);

// Reads specified file
var noteString = fs.readFileSync("notes.json");

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
