var express = require('express'),
    router  = new express.Router();

// Require controllers.
var pagesController = require('../controllers/pages');

// root path:
router.get('/', pagesController.welcome);

router.get('/about', pagesController.about);

router.get('/books', pagesController.books);

router.get('/mind', pagesController.mind);

router.get('/body', pagesController.body);

router.get('/heart', pagesController.heart);

module.exports = router;
