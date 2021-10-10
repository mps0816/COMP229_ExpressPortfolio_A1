var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('partials/home', { title: 'Home'});

});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('partials/home', { title: 'Home'});

});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('partials/about', { title: 'About'});
  
});

/* GET PRODUCTS page. */
router.get('/projects', function(req, res, next) {
  res.render('partials/projects', { title: 'Projects'});
  
});

/* GET Services page. */
router.get('/Services', function(req, res, next) {
  res.render('partials/services', { title: 'Services'});
  
});

/* GET Contact Us. */
router.get('/contactus', function(req, res, next) {
  res.render('partials/contact', { title: 'Contact Us'});
  
});

router.post('/contact', function(req, res, next){
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let phone = req.body.phone;
  let email = req.body.email;
  let message = req.body.message;
  res.send(first_name+' ,'+ last_name+' ,'+phone+' ,'+email+' ,'+message);
});

module.exports = router;
