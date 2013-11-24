
/**
 * Module dependencies.
 */

var express = require('express'),
 	routes = require('./routes'),
 	user = require('./routes/user'),
 	http = require('http'),
 	path = require('path'),
 	us = require('./models/User.js'),
	app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('ip', '162.242.172.143');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/adduser', function(req, res){
	console.log(req.user + '   '+ req.email);
	us.addUser(req.email, req.name);
});

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});