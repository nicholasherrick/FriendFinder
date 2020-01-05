const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('data'));
app.use(express.static('public'));
app.use(express.static('routing'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, () =>{
    console.log('App listening on port: ' + PORT);
});