var express = require('express');
var router = express.Router();
var message = require('../models/message.js');

/* GET ALL MESSAGE */
router.get('/', function(req, res, next) {
    
    for (i = 0; i <= 50; i++) {
        Book.push({
                 'id': i,
                 'title': 'Saab' + i,
                 'author' :'tony' + i,
                 'price': Math.floor(Math.random() * 500)});
    }
    res.json(Book); // return elemento
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
    res.json(Book.filter(book => book.id == req.params.id)); // return elemento
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  var data = [];
    for (i = 0; i <= 50; i++) {
        data.push(Math.floor(Math.random() * 500))
    }
    res.json(data); // return elemento
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  var data = [];
    for (i = 0; i <= 50; i++) {
        data.push(Math.floor(Math.random() * 500))
    }
    res.json(data); // return elemento
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  var data = [];
    for (i = 0; i <= 50; i++) {
        data.push(Math.floor(Math.random() * 500))
    }
    res.json(data); // return elemento
});

module.exports = router;