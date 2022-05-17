const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.33mjx.mongodb.net/?retryWrites=true&w=majority`;
const connectToMongo = () => {
    try {
        mongoose.connect(
            mongoUrl,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            () => {
                console.log("Connected to Mongo");
            }
        );
    } catch (e) {
        console.log("Couldn't connect to Mongo'");
    }
};
module.exports = connectToMongo;
