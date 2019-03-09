var fs = require('fs');

fs.mkdir('demo',function(){  //  directory created...
    fs.readFile('../module/main.js',function(err,data){  // reading content from outside directory file
        fs.writeFile('./demo/a.txt',data); // writing data into file(a.txt)
    });
});

// fs.unlink('./demo/a.txt');

// fs.rmdir('demo')