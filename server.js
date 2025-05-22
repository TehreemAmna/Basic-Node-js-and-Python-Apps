const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Node.js API!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: "This is a basic Node.js API response." });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
