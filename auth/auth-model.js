const db = require('../database/dbConfig');

module.exports = {
    findby,
    findById,
    add
}

function findby(filter) {
    return db("auth").where(filter);
}

async function add(auth) {
    const [id] = await db("auth").insert(user, "id");

    return findById(id)
}

function findById(id) {
    return db("auth")
    .select("id", "username", "password")
    .where({ id })
    .first();
}