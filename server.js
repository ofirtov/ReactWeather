var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000; //use node enviroment port OR port 3000 (for HEROKU useage)
																			// Const is like var but CANNOT be changed!!! (ES6 feature)

//! To redirect https to http essential to use the openWeatherMap API
app.use(function(req, res, next) {
		if (req.headers['x-forwarded-proto'] === 'http'){
			next();
		}
		else
		{
			res.redirect('http://' + req.hostname + req.url);
		}
});

app.use(express.static('public'));

app.listen(PORT, function () {
	console.log('Express server is up on port 3000' + PORT);
});
