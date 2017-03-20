/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express' });
});

router.get('/noteslist', (req: express.Request, res: express.Response) => {
    res.render('noteslist', { title: 'Express' });
});

export default router;