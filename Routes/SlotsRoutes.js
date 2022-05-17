const express = require("express");
const slotsModule = require("../Models/VisitingSlots");
const app = express();

app.get("/slots", async (req, res) => {
    const slots = await slotsModule.find({});
    try {
        res.send(slots);
    } catch (err) {
        res.status(500).send(err);
    }
});
module.exports = app;
