

/*const htt = require('http');
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
		clientId: req.params.client_id,
		clientSecret: req.params.client_secret,
		grantType: req.params.grant_type,
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

*/


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
https.post = require('https-post');

const app = express();

app.use(bodyParser.json());
app.use(cors());



app.get('/v3/user/list', (req,res) => {
	console.log(req.url);
	console.log(req.params);
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
})


app.post('/oauth2/token',(req,res) => {
	console.log(req.query);
	console.log(req.params);
	console.log(req.query.username);
console.log(req.query.grant_type);
console.log(req.query.password);
console.log(req.query.client_id);
console.log(req.query.client_secret);
console.log(req.query.redirect_uri);
     https.post(`https://api.sciener.cn${req.url}`,{
		client_id: req.query.client_id,
		client_secret: req.query.client_secret,
		grant_type: req.query.grant_type,
		username: req.query.username, 
		password: req.query.password,
		redirect_uri: req.query.redirect_uri
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

})




app.listen(3000||process.env.PORT, ()=>{
	console.log(`app is running at port ${process.env.PORT}`);
})







