const request = require('supertest');
var app = require('./server').app;
var expect = require('expect');

it('should response as Hello World!', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello World!')
        .end(done);
});

it('should get the Users Information', (done) => {
    request(app).get('/user').expect(200)
    .expect((res) =>{
        expect(res.body).toContainEqual({
            name: "Arun",
            Age: 21
        });
    }).end(done);
});
