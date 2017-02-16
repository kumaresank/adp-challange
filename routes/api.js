var express = require('express');
var db = require('../config/config').connection;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.query('SELECT * from battles', function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });
});

module.exports = router;