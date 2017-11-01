var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  var user={
    username:'admin',
    password:'123456'
  }
  res.render('home', { 
    title: 'Shop', 
    user: user,
    layout: 'layouts/layout.html' 
  });
});

/* GET login page. */
router.route('/login')
.get(function(req, res, next) {
	res.render('login', {
    layout: 'layouts/login.html'
  });
})
.post(function(req, res, next) {
	var user={
    username:'admin',
    password:'123456'
  }
  if(req.body.username === user.username && req.body.password === user.password){
    res.redirect('/home');
  }
  res.redirect('/login');
});

/* GET regist page. */
router.route('/regist')
.get(function(req, res, next) {
  res.render('regist', {
    layout: 'layouts/login.html' 
  });
})

/* GET logout page. */
router.get('/logout',function(req, res) {
  res.redirect('/');
});

module.exports = router;
