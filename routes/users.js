var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  const id = req.body.params.id;
  res.send('response for id of: ' + id);
});

module.exports = router;
