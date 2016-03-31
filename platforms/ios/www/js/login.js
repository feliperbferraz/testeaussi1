// var Connection = require('tedious').Connection;
// var config = {
// 	userName: 'adminaussi',
// 	password: 'Au$$iAdmin1',
// 	server: 'aussidb1.cfsh89kyxreo.sa-east-1.rds.amazonaws.com:5432',
//     // When you connect to Azure SQL Database, you need these next options.
//     //options: {encrypt: true, database: 'AdventureWorks'}
// };
// var connection = new Connection(config);
// connection.on('connect', function(err) {
//     // If no error, then good to proceed.
//     console.log("Connected");
//     executeStatement();
// });

// var Request = require('tedious').Request;
// var TYPES = require('tedious').TYPES;

// function executeStatement() {
// 	request = new Request("SELECT 1 FROM aussi.users;", function(err) {
// 		if (err) {
// 			console.log(err);}
// 		});
// 	var result = "";
// 	request.on('row', function(columns) {
// 		columns.forEach(function(column) {
// 			if (column.value === null) {
// 				console.log('NULL');
// 			} else {
// 				result+= column.value + " ";
// 			}
// 		});
// 		console.log(result);
// 		result ="";
// 	});

// 	request.on('done', function(rowCount, more) {
// 		console.log(rowCount + ' rows returned');
// 	});
// 	connection.execSql(request);
// }

// // var $loginID = $("#login");


// // $( "btn btn-default submit" ).click(function() {
// // 	var name = $("#form-control").attr("placeholder", "Nome de Usuário").val();
// // 	var username = $( "input:first" ).val() 
// // 	javascript:alert(name);
// // }

// // var name = $("#form-control").attr("placeholder", "Nome de Usuário").val();
// // var email = $("#email").val();
// // var password = $("#password").val();
// // var cpassword = $("#cpassword").val();
// // if (name == '' || email == '' || password == '' || cpassword == '') {
// // 	alert("Please fill all fields...!!!!!!");
// // } else if ((password.length) < 8) {
// // 	alert("Password should atleast 8 character in length...!!!!!!");
// // } else if (!(password).match(cpassword)) {
// // 	alert("Your passwords don't match. Try again?");
// // } else {
// // 	$.post("register.php", {
// // 		name1: name,
// // 		email1: email,
// // 		password1: password
// // 	}, function(data) {
// // 		if (data == 'You have Successfully Registered.....') {
// // 			$("form")[0].reset();
// // 		}
// // 		alert(data);
// // 	});
// // }
// // });

// module.exports = connection
