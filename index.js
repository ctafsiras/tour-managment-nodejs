const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const tourRouter = require('./routes/tour.route');
require('dotenv').config()


app.use(express.json())
main().catch(err => console.log("Error: ", err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL, () => {
        console.log("MongoDB Connected")
    });

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

app.use('/', tourRouter)
app.get('/', (req, res) => {
    res.send("Hello Node")
})

app.listen(port, () => {
    console.log('Server Running on Port ', port);
})