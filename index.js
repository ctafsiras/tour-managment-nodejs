const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

main().catch(err => console.log("Error: ", err));

async function main() {
    await mongoose.connect('mongodb+srv://db:db@cluster0.dbyzuki.mongodb.net/TourManagement?retryWrites=true&w=majority', () => {
        console.log("MOngo succes")
    });

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

app.get('/', (req, res) => {
    res.send("Hello Node")
})

app.listen(port, () => {
    console.log('Server Running on Port ', port);
})