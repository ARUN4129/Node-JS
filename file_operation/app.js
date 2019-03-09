var file = require('fs')    // importing filesystem module('fs')

///////////////////////////////////////

//      WRITING FILE    
file.writeFileSync("write_file.txt",'Writing started Here...'); 
// if file is not present then it will be created first.

//      READING FILE

var data = file.readFileSync('write_file.txt','utf8');
console.log(data);

// console.log(file.readFileSync('write_file.txt'));        //  ASCI code display
