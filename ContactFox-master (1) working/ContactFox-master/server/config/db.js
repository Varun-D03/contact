const mongoose = require("mongoose");
// const config = require("config");


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;