// Load mongoose package
var mongoose = require('mongoose');

// Use native Node promises
mongoose.Promise = global.Promise;

// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/notesapp')
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

var NoteSchema = new mongoose.Schema({
    subject: String,
    body: String,
    creationname: { type: String, default: "ADMIN" },
    creationdate: { type: Date, default: Date.now },
    revisionname: { type: String, default: "" },
    revisiondate: { type: Date, default: Date.now },
});

// Create a model based on the schema
module.exports = mongoose.model('NotesData', NoteSchema);