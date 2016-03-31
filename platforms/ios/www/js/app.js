	var express = require('express');
	var appjs = express();
	var server = require('http').createServer(appjs);
	var io = require('socket.io').listen(server);
	var path = require("path");
	var sql = require("/Users/felipeferraz/testeaussi1/www/js/login.js");

//Indicando onde os static files estao localizados
// app.configure(function() {
// 	app.use(express.static(__dirname + '/'));
// })
// console.log('hello world static files');

//Executando o http server na porta desejada
server.listen(process.env.port);
var addr = server.address();
  console.log(' app listening on http://' + addr.address + ':' + addr.port);

appjs.use(express.static(path.join(__dirname,'..')));
console.log('hello world listen 80');

console.log(__dirname);

console.log(path.resolve(__dirname, '..'));

//appjs.get('sql', sql)

appjs.get('/', function(req, res){
	console.log('dentro do get');
	process.chdir("../");
	return res.sendFile('/index.html');
	// res.sendFile('/index.html', { root: "../"});
	console.log('hello world index.html');
	//res.sendFile('index.html');
	//var json_data = {"name":"amita","pass":"12345"};
  	//res.json(json_data);
	//res.sendFile('index1.html', { root: path.join(__dirname, '../') });
});

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

//app.set('views', __dirname + '/views')
//app.set('view engine', 'jade')
console.log('hello world antes do socketio');
io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		io.sockets.emit('new message', data);
//		socket.broadcast.emit('new message', data);
	});
});