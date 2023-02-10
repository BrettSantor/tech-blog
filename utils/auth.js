const withAuth = (req, res, next) => {
  console.log('checking logged in status')
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      
      next();
    }
  };
  
  module.exports = withAuth;
  