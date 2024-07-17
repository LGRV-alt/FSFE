const http = require('http');

http.createServer(function (req, res){
	res.write("Im not worried about it");
	res.end();
}
).listen(3000);

console.log("Server Started on Port 3000");
