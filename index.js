const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const appointmentRouter = require("./Routes/AppointmentRoute");
const cors = require("cors");
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

const mongoUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.MOGODB_PASS}@cluster0.33mjx.mongodb.net/doctors-portal?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
});

app.use(cors());

app.use(appointmentRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
