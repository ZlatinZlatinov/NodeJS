const express = require('express'); 
const hbs = require('express-handlebars');

const handlebars = hbs.create({
    extname: '.hbs'
});

const app = express(); 

app.engine('.hbs', handlebars.engine); 
app.set('view engine', '.hbs'); 

app.get('/', (req, res) =>{
    res.render('home.hbs');
});

app.listen(3000); 
console.log('The server is now running on port 3000...');