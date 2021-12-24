const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'm30Wm!X#18',
//     database: 'planepix',
// });

app.set('view engine', 'ejs');
app.use('/', require('./'))

// app.use(bodyParser.urlencoded({extended: true}));

// app.post('/api/upload', (req, res) => {

//     const picImage = req.body.picImage;
//     const picName = req.body.picName;

//     const sqlInsert =
//     "INSERT INTO pix (picImage, picName) VALUES (?,?)";
//     db.query(sqlInsert, [picImage, picName], (err, result) => {
//         console.log
//     });
// })
// app.get('/', (req, res)=> {
//     const sqlInsert = "INSERT INTO "
//     db.query();
//     res.send
// })
app.listen(3001, () => {
    console.log("Running on port 3001")
});