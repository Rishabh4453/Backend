const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

// Read users
const getUsers = () => {
    return JSON.parse(fs.readFileSync('./users_400.json'));
};

// Save users
const saveUsers = (data) => {
    fs.writeFileSync('./users_400.json', JSON.stringify(data, null, 2));
};

// HOME
app.get('/', (req, res) => {
    res.send("Backend Running");
});

// GET all users
app.get('/api/users', (req, res) => {
    res.json(getUsers());
});

// GET user by ID
app.get('/api/users/:id', (req, res) => {
    const users = getUsers();
    const user = users.find(u => u.id == req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
});

// POST (Create)
app.post('/api/users', (req, res) => {
    const users = getUsers();
    const newUser = req.body;

    newUser.id = users.length ? users[users.length - 1].id + 1 : 1;

    users.push(newUser);
    saveUsers(users);

    res.json({ message: "User added", user: newUser });
});

// PUT (Replace)
app.put('/api/users/:id', (req, res) => {
    const users = getUsers();
    const id = Number(req.params.id);

    const index = users.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).json({ message: "User not found" });

    users[index] = { id, ...req.body };
    saveUsers(users);

    res.json({ message: "User replaced" });
});

// PATCH (Update)
app.patch('/api/users/:id', (req, res) => {
    const users = getUsers();
    const id = Number(req.params.id);

    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ message: "User not found" });

    Object.assign(user, req.body);
    saveUsers(users);

    res.json({ message: "User updated" });
});

// DELETE
app.delete('/api/users/:id', (req, res) => {
    const users = getUsers();
    const id = Number(req.params.id);

    const newUsers = users.filter(u => u.id !== id);

    if (users.length === newUsers.length) {
        return res.status(404).json({ message: "User not found" });
    }

    saveUsers(newUsers);

    res.json({ message: "User deleted" });
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});