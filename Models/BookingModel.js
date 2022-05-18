const mongoose = require("mongoose");
const BookingModel = new mongoose.Schema({
    date: {
        type: "string",
        required: true,
    },
    slot: {
        type: "string",
        required: true,
    },
    name: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    phone: {
        type: "string",
        required: true,
    },
});
module.exports = mongoose.model("Booked-list", BookingModel);
