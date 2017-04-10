// Load mongoose package
var mongoose = require('mongoose');

// Use native Node promises
mongoose.Promise = global.Promise;

// connect to MongoDB
mongoose.connect('mongodb://appuser:12345678@127.0.0.1/notesapp')
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

var TagSchema = new mongoose.Schema({
    TagName: String,
    CreationDate: { type: Date, default: Date.now },
});

var TodoSchema = new mongoose.Schema({
    TodoTitle: String,
    CreationName: { type: String, default: "ADMIN" },
    CreationDate: { type: Date, default: Date.now },
    RevisionName: { type: String, default: "" },
    RevisionDate: { type: Date, default: Date.now },
});

// Create a model based on the schema
module.exports.NotesData = mongoose.model('NotesData', NoteSchema);
module.exports.TodoData = mongoose.model('TodoData', TodoSchema);
module.exports.TagData = mongoose.model('TagData', TagSchema);
