/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

var NotesData = require('../models/note.js');

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Manage your notes' });
});

router.get('/noteslist', (req: express.Request, res: express.Response) => {
    res.render('noteslist', { title: 'List Notes' });
});

router.get('/viewnote/:id', (req: express.Request, res: express.Response) => {
    res.render('viewnote', { title: 'View Note',  id: req.params["id"] });
});

router.get('/addnote', (req: express.Request, res: express.Response) => {
    res.render('addnote', { title: 'Add a new note', id: req.params["id"] });
});

/* GET /notesapi listing. */
router.get('/notesapi', function (req, res, next) {
    NotesData.find(function (err, notesdata) {
        if (err) return next(err);
        res.json(notesdata);
    });
});
router.post('/notesapi', function (req, res, next) {
    NotesData.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
/* GET /notesapi/id */
router.get('/notesapi/:id', function (req, res, next) {
    NotesData.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
/* PUT /notesapi/:id */
router.put('/notesapi/:id', function (req, res, next) {
    NotesData.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
router.delete('/notesapi/:id', function (req, res, next) {
    NotesData.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

export default router;