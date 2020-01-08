const express = require('express');
const app = express();

const path = require("path");
var public = path.join(__dirname, '');

const port = 3000;

app.get('/', (req,res) => {
    res.sendFile(path.join(public, 'index.html'))
});

app.use('/', express.static(public));
app.listen(process.env.port || 3000);

console.log('Serer is running on port ' + port);