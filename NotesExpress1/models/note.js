// Load mongoose package
var mongoose = require('mongoose');

// Use native Node promises
mongoose.Promise = global.Promise;

// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/notesapp')
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

var NoteSchema = new mongoose.Schema({
    Subject: String,
    Body: String,
    Tags: {type: String, default: ""},
    UserName: {type: String, default:"Administrator"},
    CreationName: { type: String, default: "ADMIN" },
    CreationDate: { type: Date, default: Date.now },
    RevisionName: { type: String, default: "" },
    RevisionDate: { type: Date, default: Date.now },
    RemoteIpAddress: {type: String, default: ""}
});

// Create a model based on the schema
module.exports = mongoose.model('NotesData', NoteSchema);