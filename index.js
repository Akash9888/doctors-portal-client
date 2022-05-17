const express = require("express");
const connectToMongo = require("./db");
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
connectToMongo();

app.get("/", (req, res) => {
    res.send("Hello from doctors portal");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
