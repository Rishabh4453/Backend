const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ejsproject')
.then(() => console.log("connected to database"))
.catch(err => console.log(err));

const newSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number
});

const User = mongoose.model('User', newSchema);

app.get('/', (req, res) => {
    res.send("Server is working");
});

app.post('/user', async (req, res) => {
    const data = req.body;
    const newUser = await User.create(data);
    res.send(newUser);
});

app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});