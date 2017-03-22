/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express Index' });
});

router.get('/noteslist', (req: express.Request, res: express.Response) => {
    res.render('noteslist', { title: 'List Notes' });
});

router.get('/viewnote/:id', (req: express.Request, res: express.Response) => {
    res.render('viewnote', { title: 'View Note',  id: req.params["id"] });
});



export default router;