// app.js
const postgres = require('postgres');
require('dotenv').config();


let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID, SECRET_KEY } = process.env;

const sql = postgres({
    host: PGHOST,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: 'require',
    connection: {
        options: `project=${ENDPOINT_ID}`,
    },
});

async function getPgVersion() {
    const result = await sql`select version()`;
    console.log(result);
}
//sadf
getPgVersion();

module.exports = { sql }