console.log("starting notes.js");

const fs = require("fs");

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  // fetch notes first so they're not overwritten
  // make sure file exists to avoid error messages
  try {
    var notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (e) {}

  // after fetch, check for duplicates before saving

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log("Getting all notes");
};

getNote = title => {
  console.log("Getting note", title);
};

var removeNote = title => {
  console.log("Removing note", title);
};

// exports functions to be used in other files
module.exports = {
  // shorthand for addNote: addNote
  addNote,
  getAll,
  getNote,
  removeNote
};
