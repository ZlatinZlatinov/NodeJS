const router = require('express').Router(); 

router.get('/', (req, res)=>{
    res.render('create');
}); 

router.post('/', (req, res)=>{
    console.log('Im trying to handel the request'); 
    res.redirect('/catalog');
})

module.exports = router;