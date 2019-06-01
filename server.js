
const http = require('http');
const https = require('https');

const port = process.env.PORT || 3000;

http.createServer((req,res) =>{
	
	
   
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

