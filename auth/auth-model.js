const db = require('../database/dbConfig');

module.exports = {
    findby,
    findById,
    add
}

function findby(filter) {
    return db("users").where(filter);
}

function add(users) {
    return db("users").insert(users)   
   }

function findById(id) {
    return db("users")
    .select("id", "username", "password")
    .where({ id })
    .first();
}