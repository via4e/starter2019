'use strict'

const express=require('express');
const app=express();

const db = {
    "emp": [
        {
            "id": 1,
            "first_name": "Sebastian",
            "last_name": "Eschweiler",
            "email": "sebastian@codingthesmartway.com"
        },
        {
            "id": 2,
            "first_name": "Steve",
            "last_name": "Palmer",
            "email": "steve@codingthesmartway.com"
        },
        {
            "id": 3,
            "first_name": "Ann",
            "last_name": "Smith",
            "email": "ann@codingthesmartway.com"
        }
    ]
}

const cors = (req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type");

    next();
};

app.use(cors);

app.listen(3344, () => {
    console.info(`Listening to c http://localhost:3344`);
});

// Index Page
app.get('/',function (req,res){
    res.json(db.emp[0]);
});

app.get('/first',function (req,res){
    res.json(db.emp[1]);
});

app.get('/second',function (req,res){
    res.json(db.emp[2]);
});

// Updater
function update () {
    console.log('update', Date.now() );
}

//Other Errors
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

//404
app.use(function (req, res, next) {
    res.status(404).send("Page not found")
})