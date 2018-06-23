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
  return fetchNotes();
};

getNote = title => {
  // fetch, filter, return
  var notes = fetchNotes();
  var selectedNote = notes.filter(note => note.title === title);
  return selectedNote[0];
};

var removeNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  // check to make sure note was removed (returns true)
  return notes.length !== filteredNotes.length;
};

var logNote = note => {
  console.log("--");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

// exports functions to be used in other files
module.exports = {
  // shorthand for addNote: addNote
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};

// module.exports.age = 33
// in app.js, this can be accessed with notes.age (because the notes variable is set to this file name)
