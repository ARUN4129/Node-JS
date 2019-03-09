const utils = require('./utils');
const expect = require('expect');

it('should add two utilsbers',() => {
    var res = utils.add(12,23);
    expect(res).toBe(35);
});

it('should sub two utilsbers',() => {
    var res = utils.sub(12,23);
});

it('should set firstName and lastName for user',() =>{
    var user = { location: 'Paris', age: 25 };
    var res = utils.Profile(user, 'ARUN RATHOD');
})

it('should asyncAdd add two numbers',(done) => {
    utils.asyncAdd(3, 5, (sum) => {
        expect(sum).toBe(8);
        done();
    });
});

it('should asyncSquare Square the number',(done) => {
    utils.asyncSquare(3, (sqrt) => {
        expect(sqrt).toBe(9);
        done();
    });
});
