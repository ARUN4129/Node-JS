var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url === '/' || req.url === '/home'){   // checking url
        res.writeHead(200,{'content-type':'text/html'});
        // 200 => is a status code which means the server response is SUCCESS.
        fs.createReadStream(__dirname + '/home.html','utf8').pipe(res);
        // serving page according to url
    } else if(req.url === '/contact'){
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html','utf8').pipe(res);
    } else if(req.url === '/api/node'){
        res.writeHead(200,{'conteent-type':'text/html'});
        fs.createReadStream(__dirname + '/node_api.html','utf8').pipe(res);
    } else{
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream(__dirname + '/error.html','utf8').pipe(res);
    }
});
server.listen(4040);
console.log('server listening to port 4040');
