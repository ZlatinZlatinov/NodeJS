const express = require('express'); 
const hbr = require('express-handlebars');


const handlebars = hbr.create({
    extname:'.hbs'
}); 

const app = express(); 

app.engine('.hbs', handlebars.engine); 