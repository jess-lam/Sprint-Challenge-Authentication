const request = require('supertest');
const server = require('./server');

describe('server test', function() {
    it('should set the testing environment', function() {
        expect(process.env.DB_ENV).toBe('testing');
    });
});

describe("server.js", function() {
    describe("GET /", function() {
        it('should return 200 OK', async function() {
            const response = await request(server).get("/");

            expect(response.status).toBe(200);
        });
        it('should return JSON', function() {
            return request(server)
            .get("/")
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });
    });
});