const { getParts, getById } = require('../services/productService');

const router = require('express').Router(); 

router.get('/', (req, res)=>{ // /catalog 
    const products = getParts();

    res.render('catalog', {
        products
    });
}); 

router.get('/:productId', (req, res)=>{ // /catalog
    const id = req.params.productId; 
    const item = getById(id)[0]; 
    // TO DO: chec if the item exists and display proper message/view!
    res.render('details', item);
}); 



module.exports = router;