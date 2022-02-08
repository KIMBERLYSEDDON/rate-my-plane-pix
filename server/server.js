const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { response } = require('express');

const PORT = process.env.PORT || 3001;

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

// const db = require
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
    "SELECT * FROM pix ORDER BY likes DESC";
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
        console.log("YAY")
    });
})
app.put('/api/like', (req, res) => {
    const id = req.body.id;
    const like = req.body.like;
    const sqlUpdate = 
    "UPDATE pix SET likes=? WHERE id=?";

    db.query(sqlUpdate, [like, id], (err, result) => {
        if (err){
            console.log(err)
        } else {
            console.log(result)
        }
        
    })
})
app.listen(PORT, () => {
    console.log("Running on port 3001")
});