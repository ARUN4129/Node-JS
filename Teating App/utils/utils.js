module.exports.add = (a,b) => a + b;
module.exports.sub = (a,b) =>{
  return  a - b;
}
module.exports.mul = (a,b) => a*b;
module.exports.div = (a,b) => a/b;
module.exports.mod = (a,b) => a%b;
module.exports.square = (a) => a*a;
module.exports.cube = (num) => num*num*num;
module.exports.power = (num1,num2) => num1^num2;

module.exports.Profile = (user, fullname) => {
  var names = fullname.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}

/// NOTE: THE_TIME_OF_EACH_ASYNC_FUN_SHOULD_NOT_BE_EXCEED
/// 2 Sec OTHERWISE_MOCHA_CANNOT_BE_HANDLE_TEST_CASE

// asynchronous function for adding two numbers
module.exports.asyncAdd = (a,b,callback) => {
  setTimeout(() =>{
    callback(a+b);
  },1000);
}

// asynchronous function for square of a number
module.exports.asyncSquare = (num, callback) => {
  setTimeout(() => {
    callback(num*num);
  }, 1990);
}


