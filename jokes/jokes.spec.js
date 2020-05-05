const request = require('supertest');
const server = require('../api/server');

describe("jokes.js", function() {
    describe("GET /", function() {
        it('should return 200 OK if authorized', async function() {
            const response = await request(server).get("/");

            expect(response.status).toBe(200);
        });
        it('should return JSON', async function() {
            const response = await request(server).get("/")
            
            expect(response.type).toMatch(/json/i);
            });
        });
    });