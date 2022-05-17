const mongoose = require("mongoose");
const VisitingSlots = new mongoose.Schema({
    name: {
        type: "string",
        required: true,
    },
    slots: {
        type: "array",
    },
});
const Slots = mongoose.model("Slots", VisitingSlots);
module.exports = Slots;
