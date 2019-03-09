var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
    console.log('request made by : '+req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.end('Hey Clint, I am Server');
    var reader = fs.createReadStream(__dirname + '/index.html','utf8');
    reader.pipe(res);  // sending response
});
server.listen(3000,'127.0.0.1');  // server listening at port 3000
console.log('server listening... to port 3000');
