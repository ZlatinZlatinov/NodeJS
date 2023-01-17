const router = require('express').Router();

router.get('/', (request, response) => { // / - homepage
    response.render('home');
});

module.exports =  router ;