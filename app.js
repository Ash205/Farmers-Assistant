var express 	= require("express"),
 	app 		= express(),
 	bp 			= require("body-parser"),
 	path = require('path');
 	players 	= [];

app.use(bp.urlencoded({extended:true}));
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(__dirname+'/public'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/myfarm", function(req, res){
	res.render("myfarm", {id:req.params.id});
})

app.get("/myfarms/farm/:id", function(req, res){
	res.render("blitzkrieg", {id:req.params.id});
})

app.get("/myfarms/market", function(req, res){
	res.render("market", {id:req.params.id});
})

app.listen(process.env.PORT || 3000, function(){
	console.log("Server Started!!!");
})