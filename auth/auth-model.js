const db = require('../data/db-config');

module.exports = {
    findby,
    findById,
    add
}

function findby(filter) {
    return db("users").where(filter);
}

async function add(user) {
    const [id] = await db("users").insert(user, "id");

    return findById(id)
}

function findById(id) {
    return db("users")
    .select("id", "username", "password")
    .where({ id })
    .first();
}