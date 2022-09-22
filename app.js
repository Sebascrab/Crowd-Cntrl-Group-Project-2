const express = require('express');

const app = express();

app.get('/', (req,res) => res.send('home.hbs'));

app.listen('3000', () => console.log('example of hello world is running'))