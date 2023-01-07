const path = require('path');
const router = require('express').Router();
const fs = require("fs");
const createUniqueiId = require("create-unique-id");
const app = require("..");
const {readAndAppend} = require ("../../db/utility")
const store = require("../../db/store");

const editNote = (updateNotes) => {
    fs.writeFile(" ./db/db.json", JSON.stringify(updateNotes), (err) => {

        if (err) throw err;
    }
    )
}

//Routing. Get/notes should read the 'db.json' file and return all saved notes as JSON
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse (data));
    })
}
)
app.get("*")
module.exports = router