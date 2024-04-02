const router = require('express').Router();
const { createdNote, deletedNote } = require('../utils/notes');
const { notesArray } = require('../db/db.json');

router.get('/notes', (req, res) => {
    let results = notesArray;
  res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
  const notesArray = createdNote(req.body, notesArray);
  res.json(notesArray);
});

router.delete('/notes/:id', (req, res) => {
    const notesArray = deletedNote(req.params.id, notesArray);
  res.json(notesArray);
});

module.exports = router;
