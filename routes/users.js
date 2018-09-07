var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  UserController.get({})
    .then((users) => {
      res.json({
        confirmation: 'success',
        data: users
      });
    })
    .catch((err) => {
      res.json({
        confirmation: 'failure',
        data: err
      });
    });
});

router.get('/:id', function(req, res) {
  const id = req.params.id;

  UserController.getById(id)
    .then((user) => {
      res.json({
        confirmation: 'success',
        data: user
      });
    })
    .catch((err) => {
      res.json({
        confirmation: 'success',
        data: err
      });
    })
});

router.post('/createuser', function(req, res) {

  const user = req.body; 
  UserController.createUser(user)
    .then((user) => {
      res.json({
        confirmation: 'success',
        data: user
      });
    })
    .catch((err) => {
      res.json({
        confirmation: 'success',
        data: err
      });
    })

});

module.exports = router;
