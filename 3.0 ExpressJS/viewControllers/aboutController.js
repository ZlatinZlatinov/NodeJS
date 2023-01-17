const router = require('express').Router();

router.get('/', (req, res) => { // /about
    res.render('about');
});

module.exports = router;