var express = require('express');
var router = express.Router();
var fs = require('fs');

var ctrlMain      = require("../controllers/main");
var ctrlLogin     = require("../controllers/login");
var ctrlPeople    = require("../controllers/people");
var ctrlAboutUs   = require("../controllers/aboutus");
var ctrlContactUs = require("../controllers/contactus");
var ctrlNews      = require("../controllers/news");

// Access Control
function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
      return next();
    } else {
      req.flash('danger', 'Please login');
      res.redirect('/users/login');
    }
  }
  
/*
 * GET home page.
 */
router.get('/', ctrlMain.index);

/*
 * GET home page.
 */
router.get('/home', ctrlMain.index);

/*
 * GET main page.
 */
router.get('/main', ensureAuthenticated, ctrlMain.main);

/*
 * GET tableau page.
 */
router.get('/', ctrlMain.tableau);

/********************************* ContactUs *********************************/
/*
 * GET Contactus page.
 */
router.get('/', ctrlMain.draganddrop);

/*
 * GET Contactus page.
 */
//router.get('/contactus', ctrlPeople.movies_update);

/********************************* ContactUs *********************************/
/********************************* AboutUs ***********************************/
/*
 * GET AboutUs page.
 */
router.get('/', ctrlMain.tabs);

/*
 * GET AboutUs page.
 */
router.get('/aboutus', ctrlAboutUs.aboutus);
/********************************* AboutUs ***********************************/
/*
 * GET News page.
 */
router.get('/news', ctrlNews.news);
/********************************* AboutUs ***********************************/

/********************************* Login *************************************/
/*
 * post login page.
 */
router.post('/login', ctrlLogin.postlogin);
/********************************* Login *************************************/
/********************************* News *************************************/
/*
 * post login page.
 */
router.post('/news', ctrlNews.news);
/********************************* News *************************************/

/********************************* People ************************************/
/*
 * Get nethra info page.
 */
router.get("/vidhya", ctrlPeople.riya);


/*
 * Get haroon info page.
 */
router.get("/riya", ctrlPeople.sanjana);

/*
 * Get vidhya info page.
 */
router.get("/sanjana", ctrlPeople.vidhya);

/*
 * Get ishaan info page.
 */
//router.get("/ishaan", ctrlPeople.ishaan);
/********************************* People ************************************/

module.exports = router;

/*
function(req, res) {
    res.send(fs.readFileSync('people/Vidhya.html', {encoding: 'utf-8'}));
}
*/