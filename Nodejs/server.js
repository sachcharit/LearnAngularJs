var connect = require("connect");
var http = require("http");
var app = connect();

var serveStatic = require("serve-static");

//serve folder
var serve = serveStatic("C:/Users/sachcharit/Documents/GitHub/LearnAngularJs",
{"index" : ["index.html", "index.htm"]}
);

app.use(serve);

http.createServer(app).listen(5000);

