/**
 * check auth
 * @luna
 * @date    2017-10-30 16:59:02
 */

module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {
      req.flash('error', '未登录'); 
      return res.redirect('/signin');
    }
    next();
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录'); 
      return res.redirect('back');//返回之前的页面
    }
    next();
  }
};