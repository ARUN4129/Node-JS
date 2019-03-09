const express = require('express'); 
//  express imported

const app = express();
// app created using express

app.set('view engine','ejs');
app.get('/',(req,res) => {
   res.send('This is home page');
});

app.get('/contact',(req,res) => {
    res.sendFile(__dirname + '/app.js');
    // sending itself as response to user.
});

app.get('/:xyz',(req,res) => { // : is imp
    res.send('You passed value is:'+ req.params.xyz);
});

var vdata = {age : 32 , job : 'Programmer', hobbies : ['Swimming', 'Running', 'Racing', 'Boxing']};
app.get('/api/:Uname',(req,res) => {
    res.render('api',{person : req.params.Uname, data : vdata});
});
app.listen(3000);
console.log("express server listening to port 3000 ");
