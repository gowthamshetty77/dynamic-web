const mongoose = require("mongoose");

// creating database
mongoose.connect('mongodb://127.0.0.1:27017/dynamic')
.then(() => {
    console.log("Connection Successful");
})
.catch((error) => {
    console.log(error);
});