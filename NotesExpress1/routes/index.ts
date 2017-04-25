/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

var Schema = require('../models/models.js');

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Manage your notes' });
});

router.get('/notes/viewnote/:id', (req: express.Request, res: express.Response) => {
    res.render('viewnote', { title: 'View Note',  id: req.params["id"] });
});

router.get('/notes/addnote', (req: express.Request, res: express.Response) => {
    res.render('addnote', { title: 'Add a new note', id: req.params["id"] });
});

router.get('/notes/searchnotes', (req: express.Request, res: express.Response) => {
    res.render('searchnotes', { title: 'Search Notes' });
});

router.get('/notes/notesspa', (req: express.Request, res: express.Response) => {
    res.render('notesspa', { title: 'Notes Angular Application' });
});

/* GET /notesapi listing. */
router.get('/notesapi', function (req, res, next) {
    Schema.NotesData.find(function (err, notesdata) {
        if (err) return next(err);
        res.json(notesdata);
    });
});
router.post('/notesapi', function (req, res, next) {
    Schema.NotesData.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
/* GET /notesapi/id */
router.get('/notesapi/:id', function (req, res, next) {
    Schema.NotesData.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
/* search */
router.get('/notesapi/searchtags/:findstr', function (req, res, next) {
    Schema.NotesData.findById(req.params.findstr, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
router.get('/notesapi/searchsubject/:findstr', function (req, res, next) {
    Schema.NotesData.findById(req.params.findstr, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
/* PUT /notesapi/:id */
router.put('/notesapi/:id', function (req, res, next) {
    Schema.NotesData.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});
router.delete('/notesapi/:id', function (req, res, next) {
    Schema.NotesData.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

export default router;