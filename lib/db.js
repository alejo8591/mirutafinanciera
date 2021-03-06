var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect
var username = "fintech";
var password = "fintechchallenge";
// mongodb://<user>:<password>@paulo.mongohq.com:10016/fintech
var address = '@paulo.mongohq.com:10016/fintech';
connect();

// Connect to mongo
function connect(){
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect(url, function(err, res) {
		if(err) {
			console.log('ERROR: connecting to Database. ' + err);
  		} else {
    		console.log('Connected to Database');
  		}	
	});
}
// Disconect
function disconnect() {
	mongoose.disconnect();
}