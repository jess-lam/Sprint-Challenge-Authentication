const request = require('supertest');

const server = require('../api/server');

const db = require('../database/dbConfig');

const username = Math.random().toString();
describe("auth-router.js", function() {
    describe("POST / REGISTER", function() {
        it('should check you get 201 OK', async function() {
            const response = await request(server)
            .post("/api/auth/register")
            .send({username: username, password: 'pass'})

            //shorthand syntax username ^^^
            expect(response.body).toHaveProperty("token");
            expect(response.status).toBe(201);
        });
        it('should return JSON', async function() {
            const response = await request(server)
            .post("/api/auth/register")

            expect(response.type).toBe('application/json');
        });
    });
});

describe("auth-router.js", function() {
    describe("POST / LOGIN", function() {
        it('should check if 200 OK', async function() {
            const response = await request(server)
            .post("/api/auth/login")
            .send({username: username, password: 'pass'})

            expect(response.body).toHaveProperty("token");
            expect(response.status).toBe(200);
        });
        it('should return JSON', async function() {
            const response = await request(server)
            .post("/api/auth/login")

            expect(response.type).toBe('application/json');
        });
    });
});