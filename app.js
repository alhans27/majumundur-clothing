const express = require("express");
const router = express.Router();
const app = express();
const port = 3000;

// Routing
app.get("/api/", (req, res) => {
    // res.json(() => {
    //     message: "Hello Word"
    // })
    res.send("Hello MajuMundur");
})

// Run Server on port 3000
app.listen(port, () => {
    console.log(`Server Running Successfully on port ${port}`);
})
