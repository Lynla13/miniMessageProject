

//Cài đặt session api
 function getHome(req,res) {
    return res.render('homePage.ejs', {session: req.session.loggedin ? req.session.username: ''}); 
  }

  module.exports = {
    getHome
}