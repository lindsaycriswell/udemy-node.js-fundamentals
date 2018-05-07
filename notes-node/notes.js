console.log("starting notes.js");

// exports functions to be used in other files
module.exports.addNote = () => {
  console.log("addNote");
  return "New Note";
};

module.exports.add = (a, b) => {
  return a + b;
};
