var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    console.log('request made by : '+req.url);
    res.writeHead(200,{'Content-Type':'application/JSON'});
    // res.end('Hey Clint, I am Server');
    
    var myjsonObj = 
    {
        name : 'Arun',
        roll : 11281,
        age : 22

    }
    
    res.end(JSON.stringify(myjsonObj));
});
server.listen(3000,'127.0.0.1');  // server listening at port 3000
console.log('server listening... to port 3000');
