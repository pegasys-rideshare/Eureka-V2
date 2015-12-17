var mongoose = require('mongoose');
mongoose.connect('mongodb://eureka:Eureka@ds033145.mongolab.com:33145/eurekadb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
	console.log('connection made');
});



var userSchema = mongoose.Schema({
	username: String,
	password: String,
	firstname: String,
	lastname: String,
	date: { type: Date, default: Date.now },


});


var urlSchema = mongoose.Schema({
	title: String,
	baseurl: String,
	visits: Number,
	date: { type: Date, default: Date.now }

});

var models = {

	Url: mongoose.model('Url', urlSchema),
	User: mongoose.model('User', userSchema)

};

module.exports = models;

// 'mongodb://<Eureka>:<Eureka1?>@ds033175.mongolab.com:33175/eurekadb'
// 'mongodb://localhost:27017'