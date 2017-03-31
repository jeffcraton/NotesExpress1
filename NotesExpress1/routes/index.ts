/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

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


export default router;