const express = require('express');
let cors = require('cors');
const labs = require('./labs');
const soldiers = require('./soldiers');

const app = express();
app.use(cors());
const port = 3000;

app.get('/api/v1/labs', (req, res) => res.json(labs));
app.get('/api/v1/soldiers', (req, res) => res.json(soldiers));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));