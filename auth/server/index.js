// Main starting point of the application
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();

// App Setup
app.use(morgan('combined')); // Logging framework
app.use(bodyParser.json({ type: '*/*' }));


// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server is listening on : ${port}`);
