const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.status(201).json({status: 201, message: 'Success :D'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
