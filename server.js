
const apiCallFromRequest = require('./Request');
const apiCallFromNode = require('./NodejsCall');

const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req,res) =>{
	if(req.url=== "/request"){
		apiCallFromRequest.callApi(function(response){
			console.log(JSON.stringify(response));
			res.write(JSON.stringify(response));
			res.end();
		});
	}
	else if(req.url === '/'){
		apiCallFromNode.callApi(function(response){
			res.write(response);
            res.end();
		});
	}
}).listen(port);



console.log(`Listening on port ${port}...`);




