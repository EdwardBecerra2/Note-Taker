const fs = require('fs');
const path = require('path');

function createdNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function deletedNote(notesArray, id) {
    let noteId = parseInt(id);
    notesArray.splice(noteId, 1);

    let index = 0;
    notesArray.forEach(note => {
        note.id = index.toString();
        index++;
    });

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notesArray;
}
module.exports = { createdNote, deletedNote };