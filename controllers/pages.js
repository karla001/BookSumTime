var welcome = function(req, res, next) {
  res.render('pages/welcome');
};

var about = function(req, res, next) {
  res.render('pages/about');
};

var books = function(req, res, next) {
  res.render('pages/books');
};

var body = function(req, res, next) {
  res.render('pages/body');
};

var mind = function(req, res, next) {
  res.render('pages/mind');
};

var heart = function(req, res, next) {
  res.render('pages/heart');
};
module.exports = {
  welcome: welcome,
  about: about,
  books: books,
  mind: mind,
  heart: heart,
  body: body
};
