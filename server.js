//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/shan-template'));

//app.get('/*', function (req, res) {

    app.get('*', function (req, res) {
        const index = path.join(__dirname, 'shan-template', 'index.html');
        res.sendFile(index);
    });

    // Start the app by listening on the default Heroku port
    app.listen(process.env.PORT || 8080);
