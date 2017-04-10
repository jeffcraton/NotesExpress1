"use strict";
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
var Schema = require('../models/note.js');
router.get('/', function (req, res) {
    res.render('index', { title: 'Manage your notes' });
});
router.get('/notes/viewnote/:id', function (req, res) {
    res.render('viewnote', { title: 'View Note', id: req.params["id"] });
});
router.get('/notes/addnote', function (req, res) {
    res.render('addnote', { title: 'Add a new note', id: req.params["id"] });
});
router.get('/notes/searchnotes', function (req, res) {
    res.render('searchnotes', { title: 'Search Notes' });
});
/* GET /notesapi listing. */
router.get('/notesapi', function (req, res, next) {
    Schema.NotesData.find(function (err, notesdata) {
        if (err)
            return next(err);
        res.json(notesdata);
    });
});
router.post('/notesapi', function (req, res, next) {
    Schema.NotesData.create(req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
/* GET /notesapi/id */
router.get('/notesapi/:id', function (req, res, next) {
    Schema.NotesData.findById(req.params.id, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
/* search */
router.get('/notesapi/searchtags/:findstr', function (req, res, next) {
    Schema.NotesData.findById(req.params.findstr, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
router.get('/notesapi/searchsubject/:findstr', function (req, res, next) {
    Schema.NotesData.findById(req.params.findstr, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
/* PUT /notesapi/:id */
router.put('/notesapi/:id', function (req, res, next) {
    Schema.NotesData.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
router.delete('/notesapi/:id', function (req, res, next) {
    Schema.NotesData.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err)
            return next(err);
        res.json(post);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map