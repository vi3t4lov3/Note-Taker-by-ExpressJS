const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require("fs");
const uuid = require('uuid'); // create the random id 

//Get all the NOTE
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
})

//Create the Note
router.post("/", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);
});

//Delete the Note
router.delete("/:id", (req, res) => { 
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = notes.filter((notes) => notes.id !==req.params.id);
    fs.writeFileSync("./db/db.json", JSON.stringify(newNotes))
    res.json(newNotes)
})


module.exports = router