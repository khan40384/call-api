

const htt = require('http');
const htts = require('https');
htts.post = require('https-post');

const port = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

htt.createServer('request',(req,res) =>{
	console.log(req.url);

	

var params=function(req){
  let q=req.url.split('?'),result={};
  if(q.length>=2){
      q[1].split('&').forEach((item)=>{
           try {
             result[item.split('=')[0]]=item.split('=')[1];
           } catch (e) {
             result[item.split('=')[0]]='';
           }
      })
  }
  return result;
}

req.params=params(req);


console.log(req.params.username);
console.log(req.params.grant_type);
console.log(req.params.password);
console.log(req.params.client_id);
console.log(req.params.client_secret);
console.log(req.params.redirect_uri);
  if(req.method==='POST'){
	
	htts.post(`https://api.sciener.cn${req.url}`,{
		client_id: req.params.client_id,
		client_secret: req.params.client_secret,
		grant_type: req.params.grant_type,

		username: req.params.username, 
		password: req.params.password,
		redirect_uri: req.params.redirect_uri
	}, function(resp){
	resp.setEncoding('utf8');
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
	
    }
    if(req.method==='GET')
    {
	htts.get(`https://api.sciener.cn${req.url}`,(resp)=>{
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

	



}

}).listen(port);



console.log(`Listening on port ${port}...`);







