import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: 0709999999</p>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Nika</p>");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});