'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.listen(PORT, () => {
  console.log('Server Start.');
});
app.use(express.static('docs'));
