import express from "express";
import userRoutes from "./routes/user.js";

const port = 3001;
const app = express();

const customMiddlewareQuery = (req, res, next) => {
    const age = Number(req.query.age);

    console.log("Query:", age);

    if (age <= 18) {
        return res.send("You are not allowed");
    }

    next();
};

app.use("/user", userRoutes);

app.get("/", customMiddlewareQuery, (req, res) => {
    res.send("This is paragraph");
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});