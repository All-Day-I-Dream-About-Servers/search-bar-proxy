const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.use('/:sku', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Main App listening on port ${port}`));