// Requiring module
const express = require("express");
var path = require('path');

//stała z przypisaniem funkcji express()
const app = express();

//autentykacja z requestem i responsem
function authentication(req, res, next) {
	var authheader = req.headers.authorization;
	//wyświetla wynik requesta
	console.log(req.headers);

	//jeśli authheader się nie zgadza, zwraca error 401
	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}
	
	//konwertujemy dane z base64, splitując po ":"
	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	if (user == '' && pass == '') {

		// If Authorized user
		next();
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

// First step is the authentication of the client
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen((3000), () => {
	console.log("Server is Running");
})
