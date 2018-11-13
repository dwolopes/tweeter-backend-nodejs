const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://goweek:goweek123@ds015710.mlab.com:15710/goweek-backend-doug', 
    {
        useNewUrlParser: true
    }
);

app.use(express.json());

app.use(require('./routes.js'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
})