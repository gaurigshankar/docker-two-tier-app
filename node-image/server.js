'use strict';

const express = require('express');

// Constants
const PORT = 3000;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello Gauri\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
