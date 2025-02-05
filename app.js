const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the game at root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});