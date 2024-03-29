const express = require("express");
const cors = require("cors");
const { sql } = require("./db");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const saltRounds = 10;
const password = '12345678';


const salt = bcrypt.genSaltSync(saltRounds);
const app = express();


const PORT = 8080;
const bycryptPassword = bcrypt.hashSync(password, salt);
const secretKey = process.env.SECRET_KEY

console.log(bycryptPassword)

app.use(express.json());
app.use(cors());

app.get("/neon", async (req, res) => {
    const data = await sql`SELECT * FROM playing_with_neon;`;
    res.send(data)
});
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).send("Email and password are require")
        }
        const findUser = await sql`SELECT * FROM users WHERE email=${email}`
        console.log("findUser", findUser);

        if (findUser.length === 0) {
            return res.status(400).json({ message: 'User not found' })
        }
        const checkPassword = bcrypt.compare(password, findUser[0].password);
        if (!checkPassword) {
            return res.status(400).json({ message: 'wrong password' })
        }

        // const token = jwt.sign({ userId: findUser[0].id }, "1231", { expiresIn: '10h' })
        const refreshToken = jwt.sign({ userId: findUser[0].id, email: findUser[0].email }, 'JWT_SECRET_KEY', { expiresIn: '24h' });
        const accessToken = jwt.sign({ userId: findUser[0].id, email: findUser[0].email }, 'JWT_SECRET_KEY', { expiresIn: '1h' });
        console.log("access token is : ", accessToken);
        console.log("refresh token is : ", refreshToken)
        res.status(200)
            .cookie("refreshToken", refreshToken)
            .json({ message: 'User sign in success', userId: findUser[0]?.id, accessToken: accessToken });

        // res.status(201).json({ message: 'User sign in success', token: token })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'User failed' })
    }
})
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const findUser = await sql`SELECT email FROM users WHERE email=${email}`;

    if (findUser.length > 0) {
        return res.status(400).json({ message: 'User email is already exist' })
    }

    const bycryptPassword = bcrypt.hashSync(password, salt);

    const data = await sql`INSERT INTO users (email, name,  password,avatarImg,createdAt,updatedAt)
    VALUES ( ${email},${name},${bycryptPassword},'img',${new Date()},${new Date()});`
    res.send(201).json({ message: 'succsefully created' })
})
app.post("/", async (req, res) => {
    const { amount, category, date, time, payee, note, type } = req.body;

})
app.get("/", async (req, res) => {
    const data = await sql`select * from users`
    res.send(data);
})

app.listen(PORT, () => {
    console.log("Application running at http://localhost:" + PORT)
})
//sadfasdfsadf