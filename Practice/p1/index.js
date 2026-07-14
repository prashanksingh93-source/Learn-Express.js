import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const home = path.resolve("page", "home.html");
    console.log(home);

    res.sendFile(home);
});

app.get("/login", (req, res) => {
    const home = path.resolve("page", "login.html");
    console.log(home);

    res.sendFile(home);
});

app.post("/submit", (req, res) => {
    const home = path.resolve("page", "submit.html");
    console.log(home);

    res.sendFile(home);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});