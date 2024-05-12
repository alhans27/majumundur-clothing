require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routers/product-router");
const userRouter = require("./routers/user-router");

const app = express();
const host = process.env.SERVER_HOST;
const port = process.env.SERVER_PORT || 4000;
const dbUri = process.env.DB_URI || "mongodb://127.0.0.1:27017/db_majumundur_clothing";

// Connection to Database
mongoose.connect(dbUri, {
    serverSelectionTimeoutMS: 5000
  }).then(
    () => {console.log("[CONNECTION SUCCESSFUL] successfully connected to database")},
    (error) => {console.log("[CONNECTION ERROR]", error)},
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routing
// Render Homepage
app.get("/api/", (req, res) => {
    res.status(200);
    res.json({
        status: "OK",
        message: "Hello Word",
        data: [],
    });
    // res.send("Hello MajuMundur");
});

app.use("/api/", productRouter);
app.use("/api/", userRouter);

// Run Server on port 3000
app.listen(port, () => {
    console.log(`Server Running Successfully on ${host}:${port}`);
});
