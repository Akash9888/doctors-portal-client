const express = require("express");
const slotsModel = require("../Models/VisitingSlots");
const bookingModel = require("../Models/BookingModel");
const app = express();
const { body, validationResult } = require("express-validator");

app.get("/appointmentData", async (req, res) => {
    const slots = await slotsModel.find({});
    try {
        res.send(slots);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post(
    "/save/bookingData",
    [
        body("date", "date must be a string format").isString(),
        body("slot", "slote must be a string format").isString(),
        body("name", "name must be a string").isString(),
        body("email", "enter valid email ").isEmail(),

        body("phone", "Enter valid phone number ").isMobilePhone(["bg-BG"]),
    ],
    async (req, res) => {
        const bookingData = new bookingModel(req.body);

        try {
            await bookingData.save();
            res.send(bookingData);
            console.log(bookingData);
        } catch (error) {
            res.status(500).send(error);
        }
    }
);

module.exports = app;
