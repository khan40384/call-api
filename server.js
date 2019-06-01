const apiCallFromRequest = require('./Request');
const apiCallFromNode = require('./NodejsCall');

const http = require('http');
const https = require('https');

const port = process.env.PORT || 3000;

http.createServer((req,res) =>{
	
	/*if(req.url=== "/v3/user/list?clientId=4e37a73f60064861a7b107b776b23fae&clientSecret=422c5e305e671499f1329c7be9c5ef28&startDate=0&endDate=0&pageNo=1&pageSize=10&date=Date/request"){
		apiCallFromRequest.callApi(function(response){
			console.log(JSON.stringify(response));
			res.write(JSON.stringify(response));
			res.end();
		});
	}
	else if(req.url === '/v3/user/list?clientId=4e37a73f60064861a7b107b776b23fae&clientSecret=422c5e305e671499f1329c7be9c5ef28&startDate=0&endDate=0&pageNo=1&pageSize=10&date=Date/node'){
		apiCallFromNode.callApi(function(response){
			res.write(response);
            res.end();
		});
	}*/
	 var clientId = req.url.clientId;
	 var clientSecret = req.url.clientSecret;
	 var startDate = req.url.startDate;
	 var endDate = req.url.endDate;
	 var pageNo = req.url.pageNo;
	 var pageSize = req.url.pageSize;
	 var date = req.url.date;
     console.log(clientId);
     console.log(clientSecret);
     console.log(startDate);
     console.log(endDate);
     console.log(pageNo);
     console.log(pageSize);
     console.log(date);
     console.log(req.url);

   
	https.get(`https://api.sciener.cn${req.url}`,(resp)=>{
		let data='';
		resp.on('data',(chunk)=>{
			data += chunk;
			console.log(data);
			res.write(data);
			res.end();
		});
		resp.on('end',()=>{
        
		});
	}).on("error",(err)=>{
		console.log("error:" + err.message);
		res.write(err.message);
		res.end();
	});


}).listen(port);



console.log(`Listening on port ${port}...`);

//https://api.sciener.cn/v3/user/list?clientId=${clientId}&clientSecret=${clientSecret}&startDate=${startDate}&endDate=${endDate}&pageNo=${pageNo}&pageSize=${pageSize}&date=${date}