const express = require('express');
let cors = require('cors');
const labs = require('./labs');

const app = express();
app.use(cors());
const port = 3000;

app.get('/api/v1/labs', (req, res) => res.json(labs));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));