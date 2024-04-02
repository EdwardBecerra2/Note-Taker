const router = require('express').Router();
const { createdNote, deletedNote } = require('../utils/notes');
const { notes } = require('../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
  const note = createdNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const note = deletedNote(req.params.id, notes);
  res.json(note);
});

module.exports = router;
