const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});


app.get('/user', (req, res) =>{
    res.send([
        {name: "Shiv",Age: 25},
        {name: "Arjun",Age: 24},
        {name: "Arun",Age: 21}
    ]);
});

app.listen(4000);

module.exports.app = app;
