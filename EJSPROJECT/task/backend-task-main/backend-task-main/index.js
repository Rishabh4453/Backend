const express = require('express');
const app = express();

app.use(express.json());

// Dummy database
let users = [
    { id: 1, name: "Pratham" },
    { id: 2, name: "Rahul" }
];

// GET - fetch all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.json(user);
});

// POST - add user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.json(newUser);
});

// PUT - update full user
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    user.name = req.body.name;
    res.json(user);
});

// PATCH - partial update
app.patch('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (req.body.name) user.name = req.body.name;
    res.json(user);
});

// DELETE - remove user
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted" });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});