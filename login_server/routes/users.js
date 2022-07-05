var express = require('express');
var router = express.Router();


var passport = require('passport');
var Account = require('../models/account');



  router.get('/', function (req, res, next) {
      res.render('index', { user : req.user });
  });

  router.get('/register', function(req, res, next) {
      res.render('register', { });
  });

  router.post('/register', function(req, res, next) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render("register", {info: "Sorry. That username already exists. Try again."});
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
});


  router.get('/login', function(req, res, next) {
    console.log("is it happening?","GET")
    res.send('get users login')
      res.render('login', { user : req.user });
  });

  router.post('/login', passport.authenticate('local'), function(req, res, next) {
    res.send('post users login')
    console.log("is it happening?","POST")
      // res.redirect('/');
  });

  router.get('/logout', function(req, res, next) {
      req.logout();
      res.redirect('/');
  });

  router.get('/ping', function(req, res){
      res.send("pong!", 200);
  });


  module.exports = router