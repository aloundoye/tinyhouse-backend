import express from "express";
const app = express();
const port = 9000;
const one = 1;
const two = 2;

app.get("/", (req, res) => res.send("Hello, world!"));

app.listen(port);

console.log(`[app]: http://localhost:${port}`);
