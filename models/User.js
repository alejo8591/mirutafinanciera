var db = require('../lib/db');

var UserSchema = new db.Schema({
	email : {
		type: String,
		unique: true,
	},
	name : {
		type: String,
		lowercase : true,
	}
});

var User = db.mongoose.model('User', UserSchema);

// Exports
module.exports.addUser = addUser;

// Add User to database
function addUser(email, name){
	var instance = new User();
	instance.email = email;
	instance.name = name;
	instance.save(function(err){
		if (err) {
			callback(err);
		}
		else{
			callback(null, instance);
		}
	});
}