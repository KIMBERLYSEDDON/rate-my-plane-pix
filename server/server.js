const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'm30Wm!X#18',
    database: 'planepix',
});

app.get('/', (req, res)=> {
    const sqlInsert = "INSERT INTO "
    db.query();
    res.send
})
app.listen(3001, () => {
    console.log("Running on port 3001")
});