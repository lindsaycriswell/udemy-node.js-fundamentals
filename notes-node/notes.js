console.log("starting notes.js");

var addNote = (title, body) => {
  console.log("Adding note", title, body);
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
