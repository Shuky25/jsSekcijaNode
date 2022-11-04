const express = require("express");
const mysql = require('./database/connect');
const {StatusCodes} = require("http-status-codes");
const server = express();

server.use(express.static("public"));
server.use(express.json());

server.get("/", (req, res) => {
    res.send("<h1>Dobar damn</h1>");
});

server.post('/api/users', async (req, res) => {
    const { mejl, lozinka, ime } = req.body;
    try {
        await mysql.query("INSERT INTO users VALUES(?,?,?)", [
            mejl, lozinka, ime
        ])
        res.status(StatusCodes.CREATED).json({ok:true})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ok:false, message:error.message});
    }
})

server.listen(5000, () => {
    console.log("Slusam port...");
})