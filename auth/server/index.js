// Main starting point of the application
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');

const router = require('./router');
const app = express();

// DB Setup
mongoose.connect(`mongodb://localhost:auth/auth`, { 
  useNewUrlParser: true,
  useCreateIndex: true
});

// App Setup
app.use(morgan('combined')); // Logging framework
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server is listening on : ${port}`);
