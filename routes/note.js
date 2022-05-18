const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require("fs");
const uuid = require('uuid'); // create the random id 

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
})

router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('../db/db.json'));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync('../db/db.json', JSON.stringify(notes));
    res.json(notes);
})


module.exports = router