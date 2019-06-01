
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
	else if(req.url === '/v3/user/list?clientId=4e37a73f60064861a7b107b776b23fae&clientSecret=422c5e305e671499f1329c7be9c5ef28&startDate=0&endDate=0&pageNo=1&pageSize=10&date=Date'){
		apiCallFromNode.callApi(function(response){
			res.write(response);
            res.end();
		});
	}
}).listen(port);



console.log(`Listening on port ${port}...`);




