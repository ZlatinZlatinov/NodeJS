const router = require('express').Router(); 

router.get('/', (req, res)=>{ // /catalog
    res.render('catalog');
}); 

router.get('/:productId', (req, res)=>{ // /catalog
    res.render('details');
});

module.exports = router;