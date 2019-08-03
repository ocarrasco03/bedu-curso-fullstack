var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://admin:admin@cluster0-bppmi.mongodb.net/test?retryWrites=true&w=majority';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let fakedb = [
	{
		id: 1,
		username: 'Batman',
		password: 'alfred123'
	},
	{
		id: 2,
		username: 'DeadPool',
		password: 'fucku'
	}
];

app.use((req, res, next) => {
	if (req.headers.token == 'T-Rex') {
		next();
	} else {
		res.send('No Estas Autorizado');
	}
});
app.get('/', (req, res) => {
	res.send('ALL_OK');
});

app.post('/', (req, res) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db('BEDU');
		// var myobj = { name: "Company Inc", address: "Highway 37" };
		dbo.collection('users').insertOne(req.body, function(err, res) {
			if (err) throw err;
			console.log('1 document inserted');
			db.close();
		});
	});
	res.send('ALL_OK');
});
app.put('/', (req, res) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db('BEDU');
		var myquery = { username: req.body.username };
		var newvalues = { $set: { password: req.body.password } };
		dbo.collection('users').updateOne(myquery, newvalues, function(err, res) {
			if (err) throw err;
			console.log('1 document updated');
			db.close();
		});
	});
	res.send('ALL_OK');
});
app.delete('/', (req, res) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db('BEDU');
		var myquery = { username: req.body.username };
		dbo.collection('users').deleteOne(myquery, function(err, obj) {
			if (err) throw err;
			console.log('1 document deleted');
			db.close();
		});
	});
	res.send('ALL_OK');
});

app.listen(3000, () => {
	console.log('Server ir listening on http://localhost:3000. Happy hacking!');
});
