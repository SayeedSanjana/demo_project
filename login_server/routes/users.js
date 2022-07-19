var express = require('express');
var router = express.Router();

var passport = require('passport');
var Account = require('../models/account');

router.post('/register', function(req, res, next) {
  Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        return res.status(400).json({info: "Sorry. That username already exists. Try again."});
      }

      passport.authenticate('local')(req, res, function () {
        return res.status(200).json({info: "User registration successful!"});
      });
  });
});


router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}), function(req, res, next) {
  res.send('post users login')
  console.log("is it happening?","POST")
    // res.redirect('/');
});

router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});


module.exports = router