const request = require('supertest');

const server = require('../api/server');

const db = require('../database/dbConfig');

beforeEach(async function() {
    await db('auth').truncate();
})

describe("server.js", function() {
    describe("POST / REGISTER", function() {
        it('should return 201 OK', async function() {
            const response = await request(server)
            .post("/register")

            expect(response.status).toBe(201);
        });
        it('should return JSON', async function() {
            const response = await request(server)
            .post("/register")
            
            expect(response.type).toMatch(/json/i);
        });
        it('username should be jess and password shoudl be pass', async function(done) {
            const response = await request(server)
            .post("/register")
            .send({username: 'jess', password: 'pass'});

            expect(function(res) {
                res.body.username = res.body.username.toLowerCase();
            })
            expect(200, {
                id: 'some fixed id',
                username: 'jess',
                password: 'pass'
            }, done);
        });
    });
});