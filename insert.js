var mysql = require('mysql');
var express = require('express');
var app = express();


var connection = mysql.createConnection({
        host     : 'alltricksworld.com',
        user     : 'uday210_uday210',
        password : 'Bussas210#',
        database : 'uday210_RestDemo'
});

connection.connect();

app.set('port', (process.env.PORT || 5000));


  app.get("/users",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["user_login"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });


    app.get("/users/loguserdetails/:user_id",function(req,res){
		 console.log(req.params.user_id);
		var query = "SELECT * FROM ?? WHERE ??=? ";
        var table = ["user_leads","user_id",req.params.user_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    });
	

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});