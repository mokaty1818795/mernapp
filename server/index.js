const express = require("express");
const app = express();
const mogoose = require('mongoose')
const Usermodel = require('./models/Users.js')
const cors = require('cors')

app.use(express.json())
app.use(cors())
mogoose.connect(
    "mongodb+srv://Mokati:Mokati@cluster0.yy4pnya.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/getdata", (req, res) => {
    Usermodel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});

app.post("/createdata", async (req, res) => {
    const user = req.body;
    const newUser = new Usermodel(user);
    await newUser.save();
    res.json(user);
});

app.listen(8000, () => {
    // perform a database connection when server starts
    console.log("Server Is Up");
});