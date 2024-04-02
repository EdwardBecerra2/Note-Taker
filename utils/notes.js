const fs = require('fs');
const path = require('path');

function createdNote(body, notesArray) {
    const notes = body;
    notesArray.push(notes);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notes;
}

function deletedNote(notesArray, id) {
    let noteId = parseInt(id);
    notesArray.splice(noteId, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notesArray;
}
module.exports = { createdNote, deletedNote };