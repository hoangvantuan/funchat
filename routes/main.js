module.exports = function (app, passport) {

	app.get('/', isLoggedIn, function (req, res) {
		res.render('main.ejs');
	});
}

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated())
		return next();

	res.render('index');
}