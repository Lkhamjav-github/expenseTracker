const express = require("express");
const cors = require("cors");
const { sql } = require("./db");
const bcrypt = require("bcrypt")

const saltRounds = 10;
const password = '12345678';


const salt = bcrypt.genSaltSync(saltRounds);
const app = express();

const PORT = 8080;
const bycryptPassword = bcrypt.hashSync(password, salt);

console.log(bycryptPassword)

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world!");

});

app.get("/neon", async (req, res) => {
    const data = await sql`SELECT * FROM playing_with_neon;`;
    res.send(data)
});
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    // const { name, Email, password } = body;
    const bycryptPassword = bcrypt.hashSync(password, salt);
    const data = await sql`INSERT INTO userGeld {name, email, password }
    VALUES (${name}, ${email}, ${bycryptPassword});`;
    res.send("succsefully created")
})


app.listen(PORT, () => {
    console.log("Application running at http://localhost:" + PORT)
})