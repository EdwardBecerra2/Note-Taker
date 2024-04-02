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
    let notesId = parseInt(id);
    notesArray.splice(notesId, 1);

    let index = 0;
    notesArray.forEach(notes => {
        notes.id = index.toString();
        index++;
    });

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notesArray;
}
module.exports = { createdNote, deletedNote };