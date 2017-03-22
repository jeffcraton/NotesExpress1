"use strict";
/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { title: 'Express Index' });
});
router.get('/noteslist', function (req, res) {
    res.render('noteslist', { title: 'List Notes' });
});
router.get('/viewnote/:id', function (req, res) {
    res.render('viewnote', { title: 'View Note', id: req.params["id"] });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map