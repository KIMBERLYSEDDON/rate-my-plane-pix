const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'm30Wm!X#18',
    database: 'planepix',
});

// app.set('view engine', 'ejs');
// app.use('/', require('./'))

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.post('/api/upload', (req, res) => {

//     const picImage = req.body.picImage;
//     const picName = req.body.picName;

//     const sqlInsert =
//     "INSERT INTO pix (picImage, picName) VALUES (?,?)";
//     db.query(sqlInsert, [picImage, picName], (err, result) => {
//         console.log
//     });
// })
app.get('/api/get', (req, res)=> {
    const sqlSelect = 
    "SELECT * FROM pix";
    db.query(sqlSelect, (err, result)=>{
        res.send(result)
    })
});
app.post('/api/submit', (req, res)=>{
    console.log(req.body)
    const image = req.body.image;
    const caption = req.body.caption;

    const sqlInsert =
    "INSERT INTO pix (image, caption) VALUES (?,?)";
    db.query(sqlInsert, [ image, caption ], (err, result) => {
        console.log("ERROR",err)
    });
})
app.listen(3001, () => {
    console.log("Running on port 3001")
});