

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
http = require('http');
const querystring = require('querystring'); 

const app = express();

//app.use(bodyParser.x-www-form-urlencoded());
app.use(cors());

const port = process.env.PORT || 3000;

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

	 var client_ids= req.query.client_id;
     var client_secrets = req.query.client_secret;
      var grant_types = req.query.grant_type;
       var usernames = req.query.username;
        var passwords = req.query.password;
         var redirect_uris = req.query.redirect_uri;
     
     
	console.log(req.query);
	console.log(usernames);
console.log(grant_types);
console.log(passwords);
console.log(client_ids);
console.log(client_secrets);
console.log(redirect_uris);

  /* var postData = querystring.stringify({
        'client_id': req.query.client_id,
		'client_secret': req.query.client_secret,
		'grant_type': req.query.grant_type,
		'username': req.query.username, 
		'password': req.query.password,
		'redirect_uri': req.query.redirect_uri
});

    var options = {

  hostname: 'api.sciener.cn',
  port: port,
  path: req.url,
  client_id: req.query.client_id,
		client_secret: req.query.client_secret,
		grant_type: req.query.grant_type,
		username: req.query.username, 
		password: req.query.password,
		redirect_uri: req.query.redirect_uri,
  headers: {
  	ContentType: 'x-www-form-urlencoded',
  	method: 'POST'
  }
};

var req = http.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(postData);
req.end();*/

   


	var urlOut =`https://api.sciener.cn${req.url}`;
	console.log(urlOut);
    https.post(urlOut,{
		client_id: client_ids,
		client_secret: client_secrets,
		grant_type: grant_types,
		username: '+919560508945', 
		password: passwords,
		redirect_uri: redirect_uris
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




app.listen(port, ()=>{
	console.log(`app is running at port ${port}`);
})


/*
var postData = querystring.stringify({
    'msg' : 'Hello World!'
});

var options = {
  hostname: 'posttestserver.com',
  port: 443,
  path: '/post.php',
  method: 'POST',
  headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
       'Content-Length': postData.length
     }
};

var req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(postData);
req.end();
*/







