// Simple express.js server to serve static site (for deployment demo)
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.listen(PORT, ()=> console.log('Server running on port', PORT));
/*
To run:
1. npm init -y
2. npm install express
3. node server.js
*/
