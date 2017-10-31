var express = require('express');
var router = express.Router();

/* GET home page. 	
 * 必须用户登录以后，才可以访问
*/
router.get('/',function(req, res) {
  var user={
    username:'admin',
    password:'123456'
  }

  res.render('home', { title: 'Home', user: user });

});

module.exports = router;