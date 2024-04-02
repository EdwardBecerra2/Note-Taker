const router = require('express').Router();
const { createdNote, deletedNote } = require('../utils/notes');
const { notesArray } = require('../db/db.json');

router.get('/notes', (req, res) => {
    let results = notesArray;
  res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notesArray.length.toString();
    const note = createdNote(req.body, notesArray);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const notesArray = deletedNote(req.params.id, notesArray);
  res.json(notesArray);
});

module.exports = router;
