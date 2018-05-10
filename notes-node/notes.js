console.log("starting notes.js");

const fs = require("fs");

var fetchNotes = () => {
  // fetch notes first so they're not overwritten
  // make sure file exists to avoid error messages
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  // after fetch, check for duplicates before saving
  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log("Getting all notes");
};

getNote = title => {
  console.log("Getting note", title);
};

var removeNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  // check to make sure note was removed (returns true)
  return notes.length !== filteredNotes.length;
};

// exports functions to be used in other files
module.exports = {
  // shorthand for addNote: addNote
  addNote,
  getAll,
  getNote,
  removeNote
};
