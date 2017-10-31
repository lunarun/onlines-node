var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shop' });
});

router.route('/login')
.get(function(req, res, next) {
	res.render('login', { title: '用户登录'});
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

router.get('/logout',function(req, res) {
  res.redirect('/');
});

module.exports = router;
